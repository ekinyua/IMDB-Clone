import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
    
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=af979b918054a68f9bf49fb0dc87d152&include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending movies</div>

      <div className="flex flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/discover/movie?api_key=af979b918054a68f9bf49fb0dc87d152&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
