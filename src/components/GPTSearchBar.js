import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      //   "https://api.themoviedb.org/3/search/movie?" +
      //     movie +
      //     "&include_adult=false&language=en-US&page=1",
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  // const handleGPTSearchClick = async () => {
  //     // Make an API call to GPT API and get Movie Results

  //     const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  //     const gptResults =await openai.chat.completions.create({
  //         messages: [{ role: "user", content: gptQuery}],
  //         model: "gpt-4o",
  //     });
  //     if(!gptResults.choices) {
  //         // To do : Write Error Handling
  //     }

  //     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  //     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  //     // [Promise, Promise, Promise, Promise, Promise]

  //     const tmdbResults = await Promise.all(promiseArray);

  //     dispatch(addGPTMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  // };
  const handleGPTSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: gptQuery,
    });
    if (!gptResults.text) {
      // To do : Write Error Handling
      console.error("GPT returned no response.");
      return;
    }

    const gptMovies = gptResults.text.split(",").map((movie) => movie.trim());

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
