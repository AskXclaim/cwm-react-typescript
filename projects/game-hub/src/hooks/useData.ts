import apiClient, {CanceledError, type FetchResponse} from '../services/apiClient';
import {useEffect, useState} from "react";

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[] | null>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const controller = new AbortController();

    useEffect(() => {
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then((response) => {
                setData(response.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            })
            .finally(() => setIsLoading(false));

        return () => controller.abort();
    }, []);
    
    return {data, isLoading, error};
}

export default useData;