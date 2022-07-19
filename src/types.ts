import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>


export interface IUser {
  id:number
  username:string,
  role: string
  password:string,
}

export interface IProjects {
  id: number
  caption: string
  start: string
  redline: string
  deadline: string
  status: string
  developers:any
}

export interface IContext {
    isLoaded:boolean,
    user:IUser | null,
    token:string | null,
    setUser: TypeSetState<null>,
    setToken: TypeSetState<string>,
    logOut: TypeSetState<null>,
    users: any,
    projects: IProjects[] | null,
    setAlert: TypeSetState<boolean>
    alert: boolean
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
  labels:any
  className:string
  handleValid:boolean
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
