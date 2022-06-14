import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
  id:string,
  email: string
  avatar:string,
  name:string,
}

export interface IContext {
  user: IUser | null,
  setUser: TypeSetState<IUser | null>,
  loading:boolean
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
  setInputsValue: TypeSetState<object | string>
}