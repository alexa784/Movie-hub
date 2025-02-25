import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";


// https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=YOUR_API_KEY

interface Provider{
    logo_path:string;
    provider_id:number;
    provider_name:string;
    display_priority: number;
}
interface Country{
    US:{
        link:string;        // link prema odredjenom filmu
        flatrate:Provider[];
        rent:Provider[];
        buy:Provider[];
    }
}
interface DataType{
    id:number;
    results:Country;
}

const printProviders=(providers:Provider[])=>{
    console.log('______________');
    providers.forEach(elem=>console.log(elem.provider_name));
    console.log('_______________');
}
const clearDuplications=(country:Country)=>{
    let US=country.US;
    const providers:Provider[]=[];
    if(!US) return providers; 

    if(US.flatrate)
        US.flatrate.forEach(elem=>providers.push(elem))
    if(US.buy)
        US.buy.forEach(elem=>providers.push(elem))
    if(US.rent)
        US.rent.forEach(elem=>providers.push(elem))

    const uniqueProviders = providers.filter(
        (provider, index, self) => self.findIndex(p => provider.provider_name.includes(p.provider_name)) === index
      );
    
    return uniqueProviders;
}
const getOnlyFirstWords=(providers:Provider[])=>{
    return providers.map(p=>{
        p.provider_name=p.provider_name.split(" ")[0];
        return p;
    });
}

const useProvidersByMovieId = (movieId:number) => {
    const apiClient=new ApiClient<DataType>(`/3/movie/${movieId}/watch/providers`);
    const {data,error,isLoading}=useQuery({
        queryKey:['providers',movieId],
        queryFn:apiClient.fetchData
    });
    let providers=null;
    if(data){
        providers=clearDuplications(data.results);
        providers.sort((a,b)=>a.display_priority-b.display_priority)
        providers=getOnlyFirstWords(providers);
    }
    return {providers,error,isLoading};
}

export default useProvidersByMovieId