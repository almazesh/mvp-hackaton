import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Auth from './Auth/Auth';
import { useAuth } from '../providers/useAuth';
import Loader from '../components/Loader';



export default function Layout(){
  const { user } = useAuth()

  if(!user) return <Loader />

  return( 
    <React.Fragment>
      <Routes>
        {
          user && (
            <Route path='/' element={<Main />} />
          )
        }
        {
          !user && <Route path='/auth' element={<Auth />}/>
        }
        <Route path='*' element={<Navigate to={user ? '/' : 'auth'} />}/>
      </Routes>
    </React.Fragment>
  )
}