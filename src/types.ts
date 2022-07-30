import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { Type } from "typescript";

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
    alert: boolean,
    setReRenderer: TypeSetState<string>,
    alertTitle: string,
    setAlertTitle: TypeSetState<string>,
    goToMain: TypeSetState<any>,
    setProjects:TypeSetState<any>

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










// Если спросят сильные стороны
// my strenth are presistence and courage

// I give my all to achieve the goal that i set for muself

// I have a hard-working nature , Iam always looking for ways to improve and grow

//  I am also a great team player

//  and also i can take a lead on projects




//  если спросят почему именно они


//  i am looking for a company where i can contribute more and grow
//  i am ready to  take the next step of my career

//  I can see that you company has much future growth potential 

// i love to grow my career at a company that has a great reputation in  the software industry




// если спросят как я коммуницирую

// I always tried to help my teammates to complete the tasks if i had complete my own

// whenever someone needed to leave earlier , i can offer to cover them

//  I am willing to do whatever it takes for the team or company to succeedx
