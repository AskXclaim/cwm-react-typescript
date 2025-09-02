import createHttpService from "@/services/httpService.ts";

export type Genre={
    id: number,
    name: string,
    image_background: string,
}

 const createGenreHttpService = createHttpService("/genres");
 export default createGenreHttpService;