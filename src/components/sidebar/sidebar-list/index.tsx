import React from "react";
import styles from './index.module.scss'
import { sidebarList } from '../../../utils/List';
import { NavLink } from "react-router-dom";
import { ISidebarListType } from '../../../types';

export default function SidebarList(){
  const [sideList] = React.useState<ISidebarListType[]>(sidebarList as ISidebarListType[])

  return(
    <React.Fragment>
      <ul className={styles.sidebar_list}>
        {
          sideList.map(item => (
            <li key={item.id}>
              <NavLink 
                to={item.path} 
                className={(active) => active && 'text-warning'}
              >
                <span>
                  <item.icon />
                </span> 
                <span>
                  {item.title}
                </span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  )
}