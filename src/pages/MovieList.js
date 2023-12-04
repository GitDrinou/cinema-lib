
import { useEffect, useState } from "react"
import { Card } from "../components/Card"

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {

  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="fmex justify-starrt flex-wrap">
          <Card />
        </div>
      </section>
    </main>
  )
}
