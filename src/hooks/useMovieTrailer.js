import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // fetch trailer video && updating the store with trailer video data

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        let trailer = json.results.filter(video => video.type === "Trailer");

        if (trailer.length === 0 && json.results.length > 0) {
            trailer = [json.results[0]];
        }

        dispatch(addTrailerVideo(trailer[0]));
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;