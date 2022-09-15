
import { commonModule, ETEKAppModule, AppViewModel, UserListViewModel, usersListModule } from "./core"

ETEKAppModule.init()
ETEKAppModule.addModules(commonModule, usersListModule)
var userListViewModel = AppViewModel.getViewModel<UserListViewModel>(UserListViewModel.getViewModelName())
userListViewModel.getUserList().subscribe(console.log)
userListViewModel.getStateLoading().subscribe(console.log)
userListViewModel.fetchUserList()