import React from "react";
import { Link } from 'react-router-dom';
import { TypeSetState } from "../../types";
import './index.scss'
import { SidebarList } from './sidebar-list/index';

interface ISidebarSetTitle {
  setHeaderTitle: TypeSetState<string>
}

export const Sidebar:React.FunctionComponent<ISidebarSetTitle> = ({setHeaderTitle}: ISidebarSetTitle) => {

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
            <SidebarList setSiderbarTitle={setHeaderTitle}/>
          </div>
        </aside>
      </section>
    </React.Fragment>
  )
}