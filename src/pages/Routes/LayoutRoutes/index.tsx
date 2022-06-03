import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NotFound } from '../404/index';
import { useAuth } from '../../../providers/useAuth';
import { Sidebar } from '../../../components/sidebar/index';
import { Header } from '../../../components/header/Header';
import * as LayoutPages from '../../../apps/Layout/pages'

export const Layout: React.FunctionComponent = () => {
  const { user } = useAuth()  
  const navigate = useNavigate()
  const [headerTitle , setHeaderTitle] = React.useState<string>('Главная')

  React.useEffect(() => {
    user && navigate('/')
  }, [user])

  return(
    <React.Fragment>
      <Sidebar setHeaderTitle={setHeaderTitle}/>

      <section
        style={{width:'79.3%', marginLeft:'auto'}}
      >
        <Header headerTitle={headerTitle}/>
        <section className='ms-5 mt-5'>
          <Routes>  
            <Route path='/' element={<LayoutPages.Main />}/>
            <Route path='/profile' element={<LayoutPages.Profile />} />
            <Route path='/team' element={<LayoutPages.Team />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  )
}