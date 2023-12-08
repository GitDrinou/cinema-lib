import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NoImage from "../assets/images/no_image.webp";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : NoImage;
  const pageTitle = useTitle(movie.title);
  
  useEffect(() => {
    const optionsAuthent = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_API_TOKEN,
      }
  }
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=fr-FR`,optionsAuthent)
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, [params.id]);


  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt={`Affiche du film ${movie.title}` }/>
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
             { movie.genres?.map((genre) => (
              <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
            ))} 
          </p>
          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 font-bold text-gray-900 dark:text-white">{Math.round(movie.vote_average)} / 10</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-gray-900 dark:text-white">{movie.vote_count} commentaires</span>
          </div>
          <p className="my-4 ms-2 text-gray-900 dark:text-white">
            <span className="mr-2 font-bold">Durée: </span>
            <span>{movie.runtime} minutes</span>
          </p>
          <p className="my-4 ms-2 text-gray-900 dark:text-white">
            <span className="mr-2 font-bold">Date de sortie: </span>
            <span>{movie.release_date}</span>
          </p>
          <div className="flex items-center">
              <p className="ms-2 mr-4 font-bold text-gray-900 dark:text-white">Code IMDB: </p>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="flex">
                    {movie.imdb_id} 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4  ml-2 mt-1 bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
              </svg>
              </a>
          </div>
        </div>
      </section>
    </main>
  )
}
