import { create } from "zustand";

interface QueryMovies{
    genreId?:number;
    providerId?:number;
}
interface QueryMovieStore{
    queryMovies:QueryMovies;
    setGenreId:(genreId:number|null)=>void;
    setProviderId:(providerId:number)=>void;
}

const useQueryMovieStore= create<QueryMovieStore>(set=>({
    queryMovies:{},
    setGenreId:(genreId:number|null)=>set((store)=>{
        if(genreId) return ({queryMovies:{...store.queryMovies, genreId}});
        else return (({queryMovies:{...store.queryMovies}}));
    }),
    setProviderId:(providerId:number)=>set((store)=>({queryMovies:{ ...store.queryMovies,providerId}}))
}));

export default useQueryMovieStore;