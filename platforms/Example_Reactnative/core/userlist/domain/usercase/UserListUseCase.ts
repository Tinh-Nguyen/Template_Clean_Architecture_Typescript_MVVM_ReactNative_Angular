import { injectable } from "inversify"
import "reflect-metadata";
import { Observable } from "rxjs"
import {User} from "../entity/User.model"
@injectable()
export default abstract class UserListUseCase{
    abstract fetchListUser():Observable<User[]>
    abstract getListUser():Observable<User[]>
    abstract updateUser(user:User):Observable<boolean>
}