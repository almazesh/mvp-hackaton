import React from "react";
import { Link } from 'react-router-dom';
import { TypeSetState, ISidebarListType } from '../../types';
import './index.scss'
import { SidebarList } from './sidebar-list/index';
import { sidebarListTop, sidebarBottomList } from '../../utils/List';

interface ISidebarSetTitle {
  setHeaderTitle: TypeSetState<string>
}

export const Sidebar:React.FunctionComponent<ISidebarSetTitle> = ({setHeaderTitle}: ISidebarSetTitle) => {
  const [sideListTop] = React.useState<ISidebarListType[]>(sidebarListTop as ISidebarListType[])
  const [sideListBottom] = React.useState<ISidebarListType[]>(sidebarBottomList as ISidebarListType[])


  return (
    <React.Fragment>
      <section className="sidebar-position col-xl-3" >
        <aside>
          <nav className="navbar sidebar-nav navbar-expand-lg navbar-dark">
            <div className="container d-flex align-items-center ">
              <Link to="" className="navbar-brand">Administration</Link>
              {/* <Link to="" className="navbar-brand">Crafter's</Link> */}
            </div>
          </nav>
          <div className="card sidebar-screen rounded-0">
            <ul className='sidebar_list'>
              {
                sideListTop.map(item => <SidebarList item={item} setSiderbarTitle={setHeaderTitle}/>)
              }
            </ul>
          </div>
          <div className="card sidebar-screen-bottom rounded-0">
            <ul className='sidebar_list'>
              {
                sideListBottom.map(item => <SidebarList item={item} setSiderbarTitle={setHeaderTitle}/>)
              }
            </ul>
          </div>
        </aside>
      </section>
    </React.Fragment>
  )
}