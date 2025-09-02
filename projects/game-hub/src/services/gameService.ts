import createHttpService from "@/services/httpService.ts";

const createGameHttpService = createHttpService("/games")
export default createGameHttpService;