import { BG_URL } from "../utils/constants"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <>
      <div 
          className="fixed -z-10 w-full">
          <img 
            className="w-full h-screen object-cover"
            src={BG_URL} 
            alt="logo"
          />
      </div>
      <div className="">
          <GPTSearchBar />
          <GPTMovieSuggestion />
      </div>
    </>
  )
}

export default GPTSearch