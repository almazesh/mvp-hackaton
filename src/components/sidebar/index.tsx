import React from "react";
import { Link } from 'react-router-dom';
import './index.scss'
import Bars from '../../assets/sidebar/Group.png'
import SidebarList from './sidebar-list/index';

export default function Sidebar(){
  return (
    <React.Fragment>
      <section className="sidebar-position col-xl-3" >
        <aside>
          <nav className="navbar sidebar-nav navbar-expand-lg navbar-dark">
            <div className="container d-flex align-items-center ">
              <Link to="" className="navbar-brand">Administration</Link>
              <span className="bars">
                <img src={Bars} alt="" />
              </span>
            </div>
          </nav>
          <div className="card sidebar-screen rounded-0">
            <SidebarList />
          </div>
        </aside>
      </section>
    </React.Fragment>
  )
}