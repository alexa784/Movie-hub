import { useQuery } from "@tanstack/react-query";
import { ApiClient, ResponseData } from "../services/api-client";
import { Movie } from "./useMovies";


const useMovie=(id?:number)=>{
    const apiClient = new ApiClient<Movie>(`/3/movie/${id}`);
    
    const{data,error,isLoading}=useQuery({
        queryKey:["movie",id],
        queryFn:()=>apiClient.fetchData({params:{
            append_to_response:"videos,images,credits"
        }})
    });
    return {movie:data,error,isLoading};
}

export default useMovie;