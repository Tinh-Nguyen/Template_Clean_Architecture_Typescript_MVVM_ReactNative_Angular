
import {ContainerModule, interfaces} from 'inversify';
import "reflect-metadata";
import IApiService from '../data/API/APIService';
import AxiosService from '../data/AxiosService';
import { COMMON_TYPE } from './types';

export const commonModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IApiService>(COMMON_TYPE.IApiService).to(AxiosService);
});