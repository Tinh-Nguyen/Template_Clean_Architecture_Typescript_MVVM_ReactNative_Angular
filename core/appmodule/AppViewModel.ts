import { ViewModel } from "../common/domain/ViewModel"
import ETEKAppModule from "./appmodule"

export class AppViewModel<T extends ViewModel>{
    viewModel: T
    constructor(viewModelName: string){
        this.viewModel = ETEKAppModule.getService<T>(Symbol.for(viewModelName))
    }
    static getViewModel<T extends ViewModel>(viewModelName: string):T{
        return ETEKAppModule.getService<T>(Symbol.for(viewModelName))
    }
}