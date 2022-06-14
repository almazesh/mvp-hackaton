import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NotFound } from '../404/index';
import { useAuth } from '../../../providers/useAuth';
import { Sidebar } from '../../../components/sidebar/index';
import { Header } from '../../../components/header/Header';
import * as LayoutPages from '../../../apps/Layout/pages'

// CSS Imports

import styles from './index.module.scss'



export const Layout: React.FunctionComponent = () => {
  const { user } = useAuth()  
  const navigate = useNavigate()
  const [headerTitle , setHeaderTitle] = React.useState<string>('Проекты')
  const [toggleCreateMenu , setToggleCreateMenu] = React.useState<boolean>(false)

  React.useEffect(() => {
    user && navigate('/')
  }, [user])
  
  return(
    <React.Fragment>
      <Sidebar setHeaderTitle={setHeaderTitle}/>
      
      <section
        className={styles.screen_section}
      >
        <Header 
          headerTitle={headerTitle} 
          setToggleCreateMenu={setToggleCreateMenu}
        />
        <section className='ms-3 mt-5' style={{height:'100vh',background:'#f2f2f2'}}>
          <Routes>  
            <Route path='/' element={<LayoutPages.Projects toggleCreateMenu={toggleCreateMenu}/>}/>
            <Route path='/profile' element={<LayoutPages.Profile />} />
            <Route path='/team' element={<LayoutPages.Team />} />
            <Route path='/logout' element={<LayoutPages.Logout />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  )
}