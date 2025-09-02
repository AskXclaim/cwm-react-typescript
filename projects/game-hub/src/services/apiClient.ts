import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"de44588780fb431a804658953bac679d"
    }
});

export {CanceledError} ;

export type Response<T>={
    count:number,
    next:string|null,
    previous:number|null,
    results:Array<T>|null,
}