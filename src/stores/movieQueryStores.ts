import { create } from "zustand";

export interface QueryMovies{
    genreId?:number;
    providerId?:number;
    searchText?:string;
}
interface QueryMovieStore{
    queryMovies:QueryMovies;
    setGenreId:(genreId:number|null)=>void;
    setProviderId:(providerId:number|null)=>void;
    setSearchText:(searchText:string|null)=>void;
    resetQuery:()=>void;
}

const useQueryMovieStore= create<QueryMovieStore>(set=>({
    queryMovies:{},
    setGenreId:(genreId:number|null)=>set((store)=>{      // only search text should be set to undefined
        store.queryMovies.searchText=undefined;
        if(genreId) return ({queryMovies:{...store.queryMovies, genreId}});
        else return ({queryMovies:{...store.queryMovies,genreId:undefined}});
    }),
    setProviderId:(providerId:number|null)=>set((store)=>{      // only search text should be set to undefined
        store.queryMovies.searchText=undefined;
        if(providerId) return ({queryMovies:{ ...store.queryMovies,providerId}});
        else return ({queryMovies:{ ...store.queryMovies,providerId:undefined}});
    }),
    setSearchText:(searchText:string|null)=>set((store)=>{      // all other parameters should be set to undefined
        if(searchText) return ({queryMovies:{ searchText}});
        else return ({queryMovies:{ ...store.queryMovies,searchText:undefined}});
    }),
    resetQuery:()=>set(()=>({queryMovies:{}}))
}));

export default useQueryMovieStore;