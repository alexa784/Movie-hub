import { QueryMovies } from "../stores/movieQueryStores";

enum endpoint {
    discoverByOtherCriteriums = "/3/discover/movie",
    discoverByTitle = "/3/search/movie",
  }

const getEndpoint=(queryMovies:QueryMovies)=>{
    if(queryMovies.searchText){
        return endpoint.discoverByTitle.toString();
    }
    return endpoint.discoverByOtherCriteriums.toString();
}

export default getEndpoint;