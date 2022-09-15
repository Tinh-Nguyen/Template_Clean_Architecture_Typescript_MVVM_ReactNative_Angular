import { Container, interfaces } from "inversify";

export default class ETEKAppModule{
    static container : Container = new Container();
    static serviceIdentifier =[]
    static init(){
    }

    static addModules(...modules: interfaces.ContainerModule[]){
        ETEKAppModule.container.load(...modules)
    }
    static unLoadModule(...modules: interfaces.ContainerModule[]){
        ETEKAppModule.container.unload(...modules)
    }

    static getService<T>(serviceIdentifier : interfaces.ServiceIdentifier<T>){
        return ETEKAppModule.container.get<T>(serviceIdentifier)
    }
}
export{
    ETEKAppModule
}





