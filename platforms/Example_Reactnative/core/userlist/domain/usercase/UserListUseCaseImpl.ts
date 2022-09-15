
import { inject, injectable } from 'inversify';
import {Observable} from 'rxjs/index';
import { USER_LIST_TYPE } from '../../di/types';
import {User} from '../entity/User.model';
import {UserListRepositoryInterface} from '../repository/UserResposity';
import UserListUseCase from './UserListUseCase';
import "reflect-metadata";

@injectable()
export default class UserListUseCaseImpl implements UserListUseCase{
    constructor( @inject(USER_LIST_TYPE.UserListRepositoryInterface) public userListRespository: UserListRepositoryInterface){}
    
    fetchListUser():Observable<User[]>{
        return this.userListRespository.fetchUserList()
    }
    
    getListUser():Observable<User[]>{
        return this.userListRespository.fetchUserList()
    }

    updateUser(user:User):Observable<boolean>{
        return this.userListRespository.updateUserList()
    }
}
