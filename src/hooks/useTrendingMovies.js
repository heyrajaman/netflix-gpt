import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector((store) => store.movies.trendingMovies);

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);
        const json = await data.json();

        dispatch(addTrendingMovies (json.results));
    };

    useEffect(() => {
        !trendingMovies && getTrendingMovies();
    }, []);
};

export default useTrendingMovies;
