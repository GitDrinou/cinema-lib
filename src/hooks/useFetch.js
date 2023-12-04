import { useState, useEffect } from 'react';
import { optionsAuthent } from '../api/source_api';

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const baseUrl = `https://api.themoviedb.org/3${apiPath}?language=fr-FR`;
    console.log(apiPath)

    useEffect(()=> {
        async function fetchMovies(){
        const response = await fetch(baseUrl, optionsAuthent);
        const json = await response.json();
        setData(json.results);
        }
        fetchMovies();
    }, [apiPath]);

  return data 
}
