import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth';
import  './index.scss'

interface IHeaderProps {
  headerTitle:string
}

export const Header: React.FunctionComponent<IHeaderProps> = ({headerTitle}: IHeaderProps) => {
  const { user } = useAuth()

  return (
    <React.Fragment>
      <nav className="navbar headers navbar-expand-lg">
        <div className=" w-100 ms-5 d-flex justify-content-between align-items-center">
          <h1 style={{fontSize:'1.6rem'}}>{headerTitle}</h1>
          {
            user && (
              <Link 
                to="" 
                className="navbar-brand d-flex align-items-center  me-5"
              >
                <img
                  className='me-2' 
                  src={user?.avatar} 
                  style={{width:'30px', borderRadius:"50%"}}
                />
                {user?.name}
              </Link>
            )
          }
        </div>
      </nav>
    </React.Fragment>
  )
}