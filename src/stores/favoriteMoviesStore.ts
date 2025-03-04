import { create } from "zustand";


interface FavoriteMoviesStore{
    favorites:number[];
    setFavorites:(favorites:number[])=>void;
}

const NAME="favorites";

const useFavoriteMoviesStore=create<FavoriteMoviesStore>(set=>{
    const favorites=localStorage.getItem(NAME);
    return ({
        favorites:favorites?JSON.parse(favorites):[],
        setFavorites:(newFavorites:number[])=>{
            localStorage.setItem(NAME,JSON.stringify(newFavorites));
            return set(()=>({favorites:newFavorites}))
        }
    })
});

export default useFavoriteMoviesStore;