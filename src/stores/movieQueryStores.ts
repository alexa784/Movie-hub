import { create } from "zustand";

interface QueryMovies{
    genreId?:number;
}
interface QueryMovieStore{
    queryMovies:QueryMovies;
    setGenreId:(genreId:number)=>void;
}

const useQueryMovieStore= create<QueryMovieStore>(set=>({
    queryMovies:{},
    setGenreId:(genreId:number)=>set(()=>({queryMovies:{genreId:genreId}}))
}));

export default useQueryMovieStore;