import React from "react";
import styles from './index.module.scss'
import { sidebarList } from '../../../utils/List';
import { NavLink } from "react-router-dom";
import { ISidebarListType, TypeSetState } from '../../../types';

interface IsetSiderbarTitle {
  setSiderbarTitle: TypeSetState<string>
}

export const SidebarList:React.FunctionComponent<IsetSiderbarTitle> = ({setSiderbarTitle}) => {

  const [sideList] = React.useState<ISidebarListType[]>(sidebarList as ISidebarListType[])

  return(
    <React.Fragment>
      <ul className={styles.sidebar_list}>
        {
          sideList.map(item => (
            <li key={item.id}>
              <NavLink 
                onClick={() => setSiderbarTitle(item.title)}
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
          ))
        }
      </ul>
    </React.Fragment>
  )
}