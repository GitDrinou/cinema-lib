import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import { Footer, Header } from "../components";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-dark-bg">
      <Header />
      <Routes>
          <Route path="/" element={<MovieList apiPath="/movie/now_playing" title="Accueil"/>}  />
          <Route path="movies/popular" element={<MovieList  apiPath="/movie/popular" title="Populaire"/>}  />
          <Route path="movies/topRated" element={<MovieList apiPath="/movie/top_rated" title="Les mieux notés"/>} />
          <Route path="movies/upcoming" element={<MovieList apiPath="/movie/upcoming" title="À venir"/>}  />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="search" element={<Search apiPath="/search/movie" />}/>
          <Route path="*" element={<PageNotFound title="Page non trouvée"/>} />
      </Routes>
      <Footer />
    </div>
  )
}
