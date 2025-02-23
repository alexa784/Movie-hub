import useGenres from './useGenres';

const useGenre = (genreId:number|null|undefined) => {
  const {genres,error,isLoading}=useGenres();
  if(!genreId) return null;

  if(error) throw error;
  if(isLoading) return null;

  return genres?.find(g=>g.id===genreId);
}

export default useGenre;