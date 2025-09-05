import {useEffect, useState} from "react";
import apiClient, {CanceledError, type FetchResponse} from "@/services/apiClient.ts";

export type Platform = {
    id: number,
    name: string,
    slug: string,
    image_background: string,
    image: string,
}
const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<Platform[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const controller = new AbortController();

    useEffect(() => {
        apiClient.get<FetchResponse<Platform>>(`/platforms`, {signal: controller.signal})
            .then(response => {
                setPlatforms(response.data.results);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;

                setError(error.message);
            });

        return () => controller.abort();
    }, []);

    return {platforms, error};
}

export default usePlatforms;