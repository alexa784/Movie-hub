import { useQuery } from "@tanstack/react-query"
import { ApiClient } from "../services/api-client"

interface FetchGenres{
    genres:[{
        id:number;
        name:string;
    }];
}
const apiClient=new ApiClient<FetchGenres>("/3/genre/movie/list?language=en");

const useGenres=()=>{ 
    const {data,error,isLoading}=useQuery({queryKey:['genres'],queryFn:apiClient.fetchData});

    return {genres:data?.genres,error,isLoading};
}

export default useGenres;