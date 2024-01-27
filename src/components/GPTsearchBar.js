import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstant"
import { useRef } from "react"
import openai from "../utils/openAI"
import { API_OPTIONS } from "../utils/constants"
import { addGPTmovieResult } from "../utils/GPTslice"

const GPTsearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch();
    

    //search movie in TMDB
    const searchMovieTMDB = async (movie) => {
         const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
         const json = await data.json();
         return json.results;

    }
    const handleGPTsearchClick = async () => {
      
       //MAKE An API call to GPT API and get movie results
       const query = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: 3 Idiots, Krish, Jawan, Dunkey, 12th fail.";
       const GPTresults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query  }],
        model: 'gpt-3.5-turbo',
      });
      if(!GPTresults.choices){
        //error handle
      }
     
      const GPTmovies = GPTresults.choices?.[0]?.message?.content.split(", ");
      //For Each Movie we will search TMDB API
      const promiseArray = GPTmovies.map((movie) => searchMovieTMDB(movie));

      const TMDresults = await Promise.all(promiseArray);
      

      dispatch(addGPTmovieResult({movieNames: GPTmovies,movieResults: TMDresults}));

    }
   
  return (
    <div className=" pt-[35%] md:pt-[10%] flex justify-center ">
      <form className=" w-full md:w-1/2  bg-black grid grid-cols-12 rounded-lg bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
       <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].GPTsearchPlaceHolder}/>
       <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4" onClick={handleGPTsearchClick}>
        {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GPTsearchBar
