import { Action } from '@ngrx/store';

export enum AppActionTypes {
    AddUser = '[APP] Add User ',
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
}

export class AddUsuario implements Action {
    readonly type: string = AppActionTypes.AddUser;
    constructor(public usuario: string) {}
}

export class Logout implements Action {
    readonly type: string = AppActionTypes.Logout;
}

export class Login implements Action {
    readonly type: string = AppActionTypes.Login;
}

export type AppAction = AddUsuario;
