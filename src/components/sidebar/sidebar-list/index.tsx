import React from "react";
import styles from './index.module.scss'
import { NavLink } from "react-router-dom";
import {  TypeSetState } from '../../../types';
import { signOut } from 'firebase/auth';
import { authentification } from '../../../firebase/index';

interface IsetSiderbarTitle {
  setSiderbarTitle: TypeSetState<string>
  item: any
}

export const SidebarList:React.FunctionComponent<IsetSiderbarTitle> = ({setSiderbarTitle, item}) => {

  const signOutFromAccount = (e: React.MouseEvent) => {
    e.preventDefault()
    signOut(authentification)
  }

  return(
    <React.Fragment>
      <li key={item.id}>
        <NavLink 
          onClick={(e) => {
            setSiderbarTitle(item.title)
          }}
          to={item.path} 
          className={({isActive}: any) => isActive ? styles.activeLink : ''}
        >
          <span>
            <item.icon />
          </span> 
          <span>
            {item.title}
          </span>
        </NavLink>
      </li>
    </React.Fragment>
  )
}