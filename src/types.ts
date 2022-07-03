import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>


export interface IUser {
  id:number
  username:string,
  role: string
  password:string,
}

export interface IContext {
    isLoaded:boolean,
    user:IUser | null,
    token:string | null,
    setUser: TypeSetState<null>,
    setToken: TypeSetState<string>,
    logOut: TypeSetState<null>,
}

export interface ISidebarListType {
  id:number,
  title:string,
  icon: IconType,
  path:string
}

export interface IFormInput {
  type: string
  placeholder:string
  
  
}


export interface IInputRegister {
  username: string,
  role:string
  password:string
}

export interface IInputLogin {
  username: string,
  password:string
}
