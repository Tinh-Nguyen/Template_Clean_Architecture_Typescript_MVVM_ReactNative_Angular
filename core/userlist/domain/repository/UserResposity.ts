
import {Observable} from 'rxjs';
import {User} from '../entity/User.model';
export interface UserListRepositoryInterface {
    getUserList(): Array<User>
    fetchUserList(): Observable<Array<User>>
    updateUserList(): Observable<boolean>
    reloadUserList():Observable<Array<User>>
}