import axios from "axios";

interface ResponseData {
    page: number;
    results: any[];
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
  fetchData=()=>{
    return axiosInstance.get<FetchType>(this.endpoint).then(res=>res.data)
  }
}
