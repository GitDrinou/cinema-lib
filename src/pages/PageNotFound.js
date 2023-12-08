import PageNoteFoundImage from "../assets/images/pagenotfound.webp";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = ({title}) => {
  useTitle(title)
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">Oops !</p>
            <img className="object-scale-down" src={PageNoteFoundImage} alt="Erreur 404:  Page non trouvée" />
        </div>
        <div>
          <Link to="/" className="flex justify-center my-4">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-lg px-5 py-1.5 mr-2 mb-2 font-medium">Back to cinelib</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
