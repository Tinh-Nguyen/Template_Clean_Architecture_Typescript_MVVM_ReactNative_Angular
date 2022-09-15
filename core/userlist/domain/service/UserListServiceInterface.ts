import { Observable } from "rxjs";
import {User} from "../entity/User.model";

export interface UserListServiceInterface{
    fetchUser() : Observable<User[]>
}