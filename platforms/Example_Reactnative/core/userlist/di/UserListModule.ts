
import {ContainerModule, interfaces} from 'inversify';
import "reflect-metadata";
import UserListRepository from '../data/repository/UserRepository';
import UserListService from '../data/service/UserList.service';
import UserListUseCaseImpl from '../domain/usercase/UserListUseCaseImpl';
import {UserListRepositoryInterface} from '../domain/repository/UserResposity';
import { UserListServiceInterface } from '../domain/service/UserListServiceInterface';
import UserListUseCase from '../domain/usercase/UserListUseCase';
import { UserListViewModel } from '../presentation/viewmodel/UserListViewModel';
import UserListViewModelImpl from '../presentation/viewmodel/UserListViewModelImpl';
import { USER_LIST_TYPE } from './types';


export const usersListModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<UserListServiceInterface>(USER_LIST_TYPE.UserListServiceInterface).to(UserListService).inSingletonScope();
    bind<UserListRepositoryInterface>(USER_LIST_TYPE.UserListRepositoryInterface).to(UserListRepository).inSingletonScope();
    bind<UserListUseCase>(USER_LIST_TYPE.UserListUseCase).to(UserListUseCaseImpl).inSingletonScope();
    bind<UserListViewModel>(USER_LIST_TYPE.UserListViewModel).to(UserListViewModelImpl).inSingletonScope();
});