import { injectable, inject } from "inversify";
import "reflect-metadata";
import { delay, from, map, Observable } from "rxjs";
import APIInput from "../../../common/data/API/APIInput";
import IApiService from "../../../common/data/API/APIService";
import { COMMON_TYPE } from "../../../common/di/types";
import { USER_LIST_TYPE } from "../../di/types";
import {User} from "../../domain/entity/User.model";
import "reflect-metadata";

@injectable()
class UserListService{
    constructor(
        @inject(COMMON_TYPE.IApiService) private apiService: IApiService
    ){}
    
    public fetchUser() : Observable<User[]>{
        return  from([[
            new User("Van A","Nguyen", "abc.@gmail.com"),
            new User("Van B","Nguyen", "abc.@gmail.com"),
            new User("Van C","Nguyen", "abc.@gmail.com"),
            new User("Van D","Nguyen", "abc.@gmail.com")
        ]]).pipe(delay(1000))
        return this.apiService.get(new APIInput("","get","")).pipe(map(res=>{
            return []
        }))
    }
}
export default UserListService