import { useState, useEffect } from 'react';

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const baseUrl = `https://api.themoviedb.org/3${apiPath}?language=fr-FR`;
    

    useEffect(()=> {
        const optionsAuthent = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_API_TOKEN,
            }
        }
        async function fetchMovies(){
        const response = await fetch(baseUrl, optionsAuthent);
        const json = await response.json();
        setData(json.results);
        }
        fetchMovies();
    }, [apiPath, baseUrl]);

  return data 
}
