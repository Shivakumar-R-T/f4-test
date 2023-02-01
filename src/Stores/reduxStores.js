import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { reducer } from './reducer';


export const initialHomeData=[];


export const HomeStore=createStore(reducer,initialHomeData,composeWithDevTools())
