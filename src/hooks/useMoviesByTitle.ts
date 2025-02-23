import useMovies from "./useMovies"

const useMoviesByTitle=(title?:string)=>{
    const apiEndpoint="/3/search/movie";
    const {data,error,isLoading}=useMovies(apiEndpoint);

    if(!title) return null;

    return {movies:data,error,isLoading};
}
export default useMoviesByTitle;

// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'