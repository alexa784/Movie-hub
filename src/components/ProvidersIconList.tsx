import { Image, Spinner } from "react-bootstrap";
import { Movie } from "../hooks/useMovies";
import useProvidersByMovieId from "../hooks/useProvidersByMovieId";
import {
  FaAmazon,
  FaApple,
  FaGooglePlay,
  FaYoutube,
  FaSpotify,
  FaQuestion,
} from "react-icons/fa";
import {
  SiNetflix,
  SiAmazonprime,
  SiApple,
  SiGoogleplay,
  SiYoutubemusic,
  SiHbo,
} from "react-icons/si";

import { IconType } from "react-icons";

interface Props {
  movie: Movie;
}

const ProvidersIconList = ({ movie }: Props) => {
  const { providers, error, isLoading } = useProvidersByMovieId(movie.id);

  if (error) throw error;
  if (isLoading) return <Spinner />;
  const limit = 4;
  const iconMap: { [key: string]: IconType } = {
    amazon: FaAmazon,
    apple: FaApple,
    google: FaGooglePlay,
    youtube: FaYoutube,
    spotify: FaSpotify,
    netflix: SiNetflix,
    amazonPrime: SiAmazonprime,
    noProvider: FaQuestion,
  };
  let counterOfShowed = 0;
  const NoProviderIcon = iconMap["noProvider"];
  return (
    <div>
      {providers?.slice(0, limit + 1).map((p) => {
        const providerName = p.provider_name.toLowerCase();
        if (providerName in iconMap) {
          counterOfShowed += 1;
          const Icon = iconMap[providerName];
          return <Icon className="me-2 opacity-50" key={p.provider_id}></Icon>;
        } else {
          return null;
        }
      })}
      {!counterOfShowed ? <NoProviderIcon /> : null}
    </div>
  );
};
/** Srediti da lijepo izgleda lista providera */
/** Provjeriti da li radi sortiranje po provideru */
// https://image.tmdb.org/t/p/w500/ ok
export default ProvidersIconList;

/**const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    android: FaAndroid,
    apple: FaApple,
    ubuntu: FaUbuntu,
    playstation: FaPlaystation,
  };
 */
