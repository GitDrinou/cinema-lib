import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NoImage from "../assets/images/no_image.webp";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : NoImage;
  const genres = movie.genres;

  console.log(genres);

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
             { genres?.map((genre) => (
              <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
            ))} 
          </p>
        </div>
      </section>
    </main>
  )
}
