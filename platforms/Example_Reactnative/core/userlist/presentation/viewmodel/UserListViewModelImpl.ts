import { inject, injectable } from "inversify";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { USER_LIST_TYPE } from "../../di/types";

import {User} from "../../domain/entity/User.model";
import UserListUseCase from "../../domain/usercase/UserListUseCase";
import {UserListViewModel} from "./UserListViewModel";


@injectable()
export default class UserListViewModelImpl extends UserListViewModel{
    protected usersList: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);
    protected loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    private subcriptionLoading! : Subscription

    constructor(@inject(USER_LIST_TYPE.UserListUseCase) private usersListUseCase: UserListUseCase){
        super()
    }

    getUserList(): Observable<User[]> {
        return this.usersList.asObservable();
    }
    getStateLoading(): Observable<boolean> {
        return this.loading.asObservable()
    }

    fetchUserList(): void {
        this.loading.next(true);
        this.subcriptionLoading = this.usersListUseCase.fetchListUser().subscribe(usersList=>{
                this.usersList.next(usersList)
                this.loading.next(false);
        })
    }

    updateUserList(): void {
        throw new Error("Method not implemented.");
    }

    reloadUserList(): void {
        this.fetchUserList()
    }
    onInit(): void {
        this.fetchUserList()
    }
    onDispose(): void {
        this.usersList.unsubscribe()
        this.subcriptionLoading?.unsubscribe()
    }
    
}