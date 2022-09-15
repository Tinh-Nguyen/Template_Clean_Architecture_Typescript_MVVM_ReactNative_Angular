import { inject, injectable } from "inversify";
import { Observable, tap } from "rxjs";
import { USER_LIST_TYPE } from "../../di/types";
import {User} from "../../domain/entity/User.model";
import {UserListRepositoryInterface} from "../../domain/repository/UserResposity";
import { UserListServiceInterface } from "../../domain/service/UserListServiceInterface";
import "reflect-metadata";

@injectable()
export default class UserListRepository implements UserListRepositoryInterface {

    protected users : User[] = []
    constructor(@inject(USER_LIST_TYPE.UserListServiceInterface) protected userListService: UserListServiceInterface) {}
    getUserList(): User[] {
        return this.users
    }
    
    reloadUserList(): Observable<User[]> {
        return this.userListService.fetchUser().pipe(tap(res=>{
            this.users = res
        }))
    }

    fetchUserList(): Observable<User[]> {
        return this.userListService.fetchUser().pipe(tap(res=>{
            this.users = res
        }))
    }
    
    updateUserList(): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

}