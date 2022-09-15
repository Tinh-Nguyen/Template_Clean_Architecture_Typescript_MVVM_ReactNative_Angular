import { Observable } from "rxjs";
import APIInput from "./APIInput";
import APIOutput from "./APIOutput";

export default interface IApiService{
    get(input: APIInput): Observable<APIOutput>
    post(input: APIInput):  Observable<APIOutput>
    put(input: APIInput):  Observable<APIOutput>
    delete(input: APIInput):  Observable<APIOutput>
}