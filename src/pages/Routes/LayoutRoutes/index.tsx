import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../../../apps/Layout/pages/Main';
import { NotFound } from '../404/index';
import { useAuth } from '../../../providers/useAuth';
import Sidebar from '../../../components/sidebar/index';


export const Layout = () => {
  const {user} = useAuth()  
  const navigate = useNavigate()

  React.useEffect(() => {
    user && navigate('/')
  }, [user])

  return(
    <React.Fragment>
      <Sidebar />
      <Routes>  
        <Route path='/' element={<Main />}/>
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}