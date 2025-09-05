import {useEffect, useState} from "react";
import { CanceledError} from "axios";
import apiClient from "@/services/apiClient.ts";

export type Platform={
    id:number,
    name: string,
    slug: string,
}
export type Game = {
    id: number,
    name: string,
    background_image: string,
    parent_platforms:{platform:Platform}[],
    metacritic:number,
}

export type GamesResponse = {
    count: number,
    results: Game[]
}
const useGames= () => {
    const [games, setGames] = useState<Game[]>();
    const [error, setError] = useState<string | null>();
    const controller = new AbortController();

    useEffect(() => {
        apiClient.get<GamesResponse>("/games", {signal: controller.signal})
            .then(response => {
                setGames(response.data.results);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })
        
        return () =>controller.abort();
    }, []);

    return {games, error};
}

export default useGames;