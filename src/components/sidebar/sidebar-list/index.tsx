import React from "react";
import styles from './index.module.scss'
import { NavLink } from "react-router-dom";
import {  TypeSetState } from '../../../types';

interface IsetSiderbarTitle {
  setSiderbarTitle: TypeSetState<string>
  item: any
}

export const SidebarList:React.FunctionComponent<IsetSiderbarTitle> = ({setSiderbarTitle, item}) => {

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
          <span className={styles.title}>
            {item.title}
          </span>
        </NavLink>
      </li>
    </React.Fragment>
  )
}