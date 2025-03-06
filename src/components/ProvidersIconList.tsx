import { Spinner } from "react-bootstrap";
import {
  FaAmazon,
  FaApple,
  FaGooglePlay,
  FaQuestion,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { SiAmazonprime, SiNetflix } from "react-icons/si";

import useProvidersByMovieId from "../hooks/useProvidersByMovieId";

import { IconType } from "react-icons";
import Movie from "../models/movie";

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
      {!counterOfShowed ? <NoProviderIcon className="me-2 opacity-50" /> : null}
    </div>
  );
};
export default ProvidersIconList;
