import { useEffect, useState } from "react";
import { Result, RickAndMorty } from "../intefaces/rick-and-morty.interface";

function useMainRickAndMorty() {
    const [rick,setRick] = useState<Result[]>([]);
    
    const getPokemons = async ()=>{
        const response= await fetch('https://rickandmortyapi.com/api/character/');
        const newResponse: RickAndMorty =  await response.json();
        
        setRick(newResponse.results);
    }

    useEffect(()=>{
        getPokemons();
    }, [])

    return {
        rick
    }
}

export default useMainRickAndMorty;