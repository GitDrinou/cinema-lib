import { useState, useEffect } from 'react';

export const useFetch = (apiPath, queryString = "") => {
    const [data, setData] = useState([]);
    const baseUrl = `https://api.themoviedb.org/3${apiPath}?api_key${process.env.REACT_APP_API_KEY}&language=fr-FR&query=${queryString}`;
    

    useEffect(()=> {
        async function fetchMovies(){
        const response = await fetch(baseUrl);
        const json = await response.json();
        setData(json.results);
        }
        fetchMovies();
    }, [apiPath, baseUrl]);

  return data 
}
