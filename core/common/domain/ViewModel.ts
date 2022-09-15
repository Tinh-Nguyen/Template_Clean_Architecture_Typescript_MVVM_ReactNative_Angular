import { injectable } from "inversify"
import "reflect-metadata";
@injectable()
export abstract class ViewModel{
    static getViewModelName(){
        return this.name
    }
    abstract onInit(): void;
    abstract onDispose(): void;
}