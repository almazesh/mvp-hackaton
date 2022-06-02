import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container d-flex justify-content-end">
          <Link to="" className="navbar-brand">Администрирование</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </React.Fragment>
  )
}