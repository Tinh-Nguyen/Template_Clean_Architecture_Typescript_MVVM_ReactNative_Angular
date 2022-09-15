import 'reflect-metadata';


const USER_LIST_TYPE = {
    UserListServiceInterface: Symbol.for("UserListServiceInterface"),
    UserListRepositoryInterface: Symbol.for("UserListRepositoryInterface"),
    UserListUseCase: Symbol.for("UserListUseCase"),
    UserListViewModel: Symbol.for("UserListViewModel")
};
export { USER_LIST_TYPE };