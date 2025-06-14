import axios, { AxiosRequestConfig } from "axios";

export interface ResponseData<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
  }

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org",
    params: {
      api_key: "e453a4afbcd524cd785ac2866c081b5c",
    },
  });
export class ApiClient<FetchType>{
  endpoint:string;
  constructor(endpoint:string){
    this.endpoint=endpoint;
  }
  fetchData=(params?:AxiosRequestConfig)=>{
    return axiosInstance.get<FetchType>(this.endpoint,params).then(res=>res.data)
  }
  fetchMovie=(id:number,params?:AxiosRequestConfig)=>{
    return axiosInstance.get<FetchType>(this.endpoint+id,params).then(res=>res.data)
  }
}
