import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGPTsearch = useSelector(store => store.GPT.showGPTsearch)

  //Fetch Data From TMDB API and Update Store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();




  return (
    <div>
      <Header />
      {
        showGPTsearch ? ( <GPTSearch /> ):( <>
         <MainContainer />
         <SecondaryContainer />
        </>)
      }
     
     

     
    </div>
  )
}

export default Browse
