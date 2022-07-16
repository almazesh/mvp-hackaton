import React from 'react'
import  './index.scss'
import { TypeSetState } from '../../types';
import { HandleCreateIcon } from './components/HandleCreateIcon';
import { useAuth } from '../../providers/useAuth';
import { Avatar } from './components/Avatar/Avatar';

interface IHeaderProps {
  headerTitle:string
  setToggleCreateMenu: TypeSetState<boolean>
  setHeaderTitle: TypeSetState<string>
}
export const Header: React.FunctionComponent<IHeaderProps> = (
  {
    headerTitle, 
    setToggleCreateMenu,
    setHeaderTitle
  }: IHeaderProps) => { 

  const handleShowCreateMenu = () => setToggleCreateMenu(prev => !prev)

  const auth = useAuth()

  return (
    <React.Fragment>
      <nav className="navbar headers navbar-expand-lg p-0">
        <div className=" w-100 ms-5 navs d-flex justify-content-between align-items-center">
          <div style={{width:'220px'}}>
            <h1 className='headerTitle '>{headerTitle}</h1>
          </div>

          <div className='d-flex align-items-center'>
            <HandleCreateIcon 
              setHeaderTitle={setHeaderTitle} 
              headerTitle={headerTitle} 
              handleShowCreateMenu={handleShowCreateMenu}
            />

            {
              auth.user && (
                <Avatar />
              )
            }
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}