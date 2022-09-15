/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component, ReactNode, type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


import { AppViewModel, commonModule, ETEKAppModule, User, UserListViewModel, usersListModule } from "etek-core"
import { inject } from 'inversify';
ETEKAppModule.init()
ETEKAppModule.addModules(commonModule, usersListModule)

class App extends Component<any>{

  state: {
    usersList: User[],
    loading: boolean
  } = {
    usersList: [],
    loading: false
  }
  constructor(props: any,
    @inject(Symbol.for(UserListViewModel.getViewModelName())) protected viewModel: UserListViewModel
    ){
    super(props)


    console.log(ETEKAppModule.container)
    //ETEKAppModule.getService<UserListViewModel>(Symbol.for(UserListViewModel.getViewModelName()))
    this.viewModel = AppViewModel.getViewModel<UserListViewModel>(UserListViewModel.getViewModelName())
  }
  componentDidMount(): void {
    this.viewModel.getUserList().subscribe(users=>{
      this.setState({
        usersList: users
      })
    })
    this.viewModel.getStateLoading().subscribe(isLoading=>{
      this.setState({
        loading: isLoading
      })
    })
    this.viewModel.fetchUserList()
  }
  refresh = ()=>{
    this.viewModel.reloadUserList()
  }
  renderUsersList(users: User[]):ReactNode{
    var elemenst = []
    for (let index = 0; index <users.length; index++) {
      const user = users[index];
      elemenst.push(
        <Text key={index}>{user.lastname+" "+user.firtname}</Text>
      )
    }
    return elemenst
  }
  render(): React.ReactNode {
      return(
        <View style ={{marginTop:10}}>
            <Text style={{fontSize:25, justifyContent:"center", alignSelf:"center"}}>Example ReactNative</Text>
            <Button title='Refresh' onPress={this.refresh}/>
            
            {this.state.loading==true ? <Text>Loading</Text>:null}
            {this.renderUsersList(this.state.usersList)}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
