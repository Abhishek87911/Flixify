import GPTmovieSuggestions from "./GPTmovieSuggestions"
import GPTsearchBar from "./GPTsearchBar"
import { BG_URL } from "../utils/constants"

const GPTSearch = () => {
  return (
    <div>
         <div className="absolute -z-10" >
        <img src={BG_URL} alt="bg-pic" />
      </div>
      <GPTsearchBar />
      <GPTmovieSuggestions />
    </div>
  )
}

export default GPTSearch
