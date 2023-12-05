import { useFetch } from "../hooks/useFetch"
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get("query");

  const movies = useFetch(apiPath, queryString);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-7°° dark:text-white">
          {movies.length === 0 ? `Pas de résultats pour "${queryString}"` : `Résultats pour "${queryString}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => (
            <Card key={movie.id} movie = {movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
