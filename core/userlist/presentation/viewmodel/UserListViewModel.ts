import { injectable } from "inversify";
import { Observable } from "rxjs";
import { ViewModel } from "../../../common/domain/ViewModel";
import {User} from "../../domain/entity/User.model";
import "reflect-metadata";
@injectable()
export  abstract class UserListViewModel extends ViewModel {
    abstract getUserList(): Observable<Array<User>>
    abstract getStateLoading(): Observable<boolean>
    abstract fetchUserList(): void
    abstract updateUserList(): void
    abstract reloadUserList(): void
}