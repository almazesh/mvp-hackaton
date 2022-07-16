import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { NotFound } from '../404';
import { useAuth } from '../../../providers/useAuth';
import { Sidebar } from '../../../components/sidebar';
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
          setHeaderTitle={setHeaderTitle}
          setToggleCreateMenu={setToggleCreateMenu}
        />
        <section className='ms-5 mt-5' style={{height:'80vh'}}>
          <Routes>  
            <Route path='/' element={<LayoutPages.Projects toggleCreateMenu={toggleCreateMenu}/>}/>
            <Route path='/profile' element={<LayoutPages.Profile />} />
            <Route path='/team' element={<LayoutPages.Team />} />
            <Route path='/create/projects' element={<LayoutPages.CreateProjects />} />
            <Route path='/todo' element={<LayoutPages.Tasks />} />
            <Route path='/logout' element={<LayoutPages.Logout />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  )
}