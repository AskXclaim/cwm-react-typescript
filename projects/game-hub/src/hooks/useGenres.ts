import apiClient, {type FetchResponse} from "@/services/apiClient.ts";
import {useEffect, useState} from "react";
import {CanceledError} from "axios";

export type Genre = {
    id: number,
    name: string,
    image_background: string,
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const controller = new AbortController();

    useEffect(() => {
        apiClient.get<FetchResponse<Genre>>("/genres", {signal: controller.signal})
            .then((response) => {
                setGenres(response.data.results);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })

        return () => controller.abort();
    }, []);
    
    return {genres, error};
}

export default useGenres;