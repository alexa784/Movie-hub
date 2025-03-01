import { useQuery } from '@tanstack/react-query';
import { ApiClient, ResponseData } from '../services/api-client';

// https://api.themoviedb.org/3/watch/providers/movie?api_key=YOUR_API_KEY
interface Provider{
    logo_path: string;
    provider_name: string;
    provider_id: number;
    display_priority: number;
}
const apiClient=new ApiClient<ResponseData<Provider>>("/3/watch/providers/movie");
const useProviders = () => {
    const {data,error,isLoading}=useQuery({
        queryKey:['providers'],
        queryFn:apiClient.fetchData
    });

    return {providers:data?.results,error,isLoading};
}
export default useProviders