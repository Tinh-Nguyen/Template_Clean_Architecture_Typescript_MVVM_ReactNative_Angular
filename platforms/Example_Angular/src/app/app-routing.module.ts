import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commonModule, ETEKAppModule, usersListModule } from 'etek-core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("sss")
    ETEKAppModule.init()
    ETEKAppModule.addModules(commonModule, usersListModule) 
  }
 }
