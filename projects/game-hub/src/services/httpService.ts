import ApiClient, {KEY} from "@/services/apiClient.ts";

class HttpService {
    endpoint: string;

    constructor(endpoint: string, orderBy: string | null = null, pageNumber: number | null) {
        this.endpoint = `${this.getFullEndpoint(endpoint, orderBy, pageNumber)}`;
    }

    private getFullEndpoint(endpoint: string, orderBy: string | null, pageNumber: number | null): string {
        let fullEndpoint = `${endpoint}?key=${KEY}${orderBy === null ? "" : "&ordering=" + orderBy}`;
        fullEndpoint += `${pageNumber !== null ? "&page=" + pageNumber : ""}`;
        return fullEndpoint;
    }

    public getAll<T>() {
        const controller = new AbortController();
        const request = ApiClient.get<T>(this.endpoint,
            {signal: controller.signal,});
        return {request, cancel: () => controller.abort()};
    }
}

const createHttpService =
    (endpoint: string, orderBy: string | null = null, pageNumber: number | null = null) => new HttpService(endpoint, orderBy, pageNumber);
export default createHttpService;