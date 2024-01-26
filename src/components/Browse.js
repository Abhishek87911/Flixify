
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  //Fetch Data From TMDB API and Update Store
  useNowPlayingMovies();




  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
      
      
      
      
      */}
    </div>
  )
}

export default Browse
