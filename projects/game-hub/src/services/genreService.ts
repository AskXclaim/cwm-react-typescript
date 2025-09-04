import createHttpService from "@/services/httpService.ts";

 const createGenreHttpService = createHttpService("/genres");
 export default createGenreHttpService;