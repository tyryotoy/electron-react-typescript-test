import {combineReducers, createStore} from 'redux';
import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

export interface IState { // --(a)
    User: IUser;
    // state が増えたら足していく
}

const combinedReducer = combineReducers<IState>({ // --(b)
    User: UserReducer,
    // reducer が増えたら足していく
});

// グローバルオブジェクトとして、store を作成する。
export const store = createStore(combinedReducer); // --(c)

// import store from './Store' とアクセスできるように default として定義する
export default store;
