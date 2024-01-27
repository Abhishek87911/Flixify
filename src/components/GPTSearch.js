import GPTmovieSuggestions from "./GPTmovieSuggestions"
import GPTsearchBar from "./GPTsearchBar"
import { BG_URL } from "../utils/constants"

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10" >
        <img className="h-screen object-cover w-screen" src={BG_URL} alt="bg-pic" />
      </div>
    <div className="">
         
      <GPTsearchBar />
      <GPTmovieSuggestions />
    </div>
    </>
  )
}

export default GPTSearch
