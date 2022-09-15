import APIInput from "./API/APIInput";
import APIOutput from "./API/APIOutput";
import IApiService from "./API/APIService";
import axios, { Axios } from 'axios-observable';
import { Observable } from "rxjs";
import { injectable } from "inversify";
@injectable()
export default class  AxiosService implements IApiService{

    put(input: APIInput): Observable<APIOutput<any>> {
        throw new Error("Method not implemented.");
    }

    delete(input: APIInput): Observable<APIOutput<any>> {
        throw new Error("Method not implemented.");
    }

    get(input: APIInput): Observable<APIOutput> {
        return Axios.get("http://google.com.vn")
    }

    post(input: APIInput): Observable<APIOutput> {
        return Axios.get("http://google.com.vn")
    }
}