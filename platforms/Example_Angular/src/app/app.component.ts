import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppViewModel, UserListViewModel } from 'etek-core';
import { inject } from 'inversify';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppViewModel<UserListViewModel> implements OnInit, OnDestroy {
  title = 'Example_Angular';

  constructor(){
    super(UserListViewModel.getViewModelName())
  }
  ngOnDestroy(): void {
    this.viewModel.onDispose();
  }
  ngOnInit(): void {
    this.viewModel.onInit();
  }
  
  reloadUserList(){
    this.viewModel.reloadUserList()
  }

}
