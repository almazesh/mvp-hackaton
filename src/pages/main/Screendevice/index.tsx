import React from "react";
import Sidebar from "../../../components/sidebar";
import Content from "./content/Content";


export default function ScreenDevice(){
  
  return(
    <React.Fragment>
      <section className="row p-0 m-0">
        <section 
          className="col-12 col-sm-12 col-lg-2 col-xl-3 p-0"
        >
         <Sidebar />
        </section>
        <section className="col-12 col-sm-12 col-lg-10 col-xl-9 p-0">
          <Content />
        </section>
      </section>
    </React.Fragment> 
  )
}