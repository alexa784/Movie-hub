export default interface Movie {
    id: number;
    title: string;
    original_title: string;
    backdrop_path: string;
    poster_path: string;
    genre_ids: number[];
    genres: [{ id: number; name: string }];
    vote_average: number;
    popularity: number;
    overview: string;
    videos: { results: Video[] };
    credits: { cast: Person[] };
    production_companies: Company[];
  }