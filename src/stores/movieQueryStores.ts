import { create } from "zustand";

interface QueryMovies{
    genreId?:number;
    providerId?:number;
}
interface QueryMovieStore{
    queryMovies:QueryMovies;
    setGenreId:(genreId:number)=>void;
    setProviderId:(providerId:number)=>void;
}

const useQueryMovieStore= create<QueryMovieStore>(set=>({
    queryMovies:{},
    setGenreId:(genreId:number)=>set(()=>({queryMovies:{genreId:genreId}})),
    setProviderId:(providerId:number)=>set(()=>({queryMovies:{providerId:providerId}}))
}));

export default useQueryMovieStore;