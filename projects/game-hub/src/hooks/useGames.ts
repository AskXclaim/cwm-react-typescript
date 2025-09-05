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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const controller = new AbortController();

    useEffect(() => {
        setIsLoading(true);
        apiClient.get<GamesResponse>("/games", {signal: controller.signal})
            .then(response => {
                setGames(response.data.results);
                setIsLoading(false)
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false)
            })
            .finally(() => setIsLoading(false));
        
        return () =>controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;