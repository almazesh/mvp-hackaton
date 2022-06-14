import React from 'react'
import { useAuth } from '../../providers/useAuth';
import  './index.scss'
import { TypeSetState } from '../../types';
import { HandleCreateIcon } from './components/HandleCreateIcon';
import { Avatar } from './components/Avatar/Avatar';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  headerTitle:string
  setToggleCreateMenu: TypeSetState<boolean>
}
export const Header: React.FunctionComponent<IHeaderProps> = (
  {
    headerTitle, 
    setToggleCreateMenu,
  }: IHeaderProps) => {
  
 

  const handleShowCreateMenu = () => setToggleCreateMenu(prev => !prev)

  return (
    <React.Fragment>
      <nav className="navbar headers navbar-expand-lg p-0">
        <div className=" w-100 ms-5 navs d-flex justify-content-between align-items-center">
          <div>
            <h1 className='headerTitle'>{headerTitle}</h1>
          </div>
          <div className='d-flex align-items-center'>
            <HandleCreateIcon headerTitle={headerTitle} handleShowCreateMenu={handleShowCreateMenu}/>

            <Link to="" className="navbar-brand">System</Link>

          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}