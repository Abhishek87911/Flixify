import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-52">
      <img className="pr-4 transition-transform transform hover:scale-110" src={IMG_CDN_URL+posterPath} alt="Movie pic" />
    </div>
  )
}

export default MovieCard
