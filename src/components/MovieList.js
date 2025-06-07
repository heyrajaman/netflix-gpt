import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   
    if (!movies) {
        return null; 
    }

    return (
        <div className="px-6">
            <h1 className="text-lg md:text-xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex">
                    {movies?.map(movie => 
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default MovieList;