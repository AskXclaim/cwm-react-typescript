import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
});

export {CanceledError} ;
const KEY = "";
export {KEY};

export type Response<T>={
    count:number,
    next:string|null,
    previous:number|null,
    results:Array<T>|null,
}