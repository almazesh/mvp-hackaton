import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as AuthPages from '../../../apps/Auth/pages'



export const Auth:React.FunctionComponent = () => {
  return(
    <React.Fragment>
      <Routes>  
        <Route path='/auth/register' element={<AuthPages.Register />}/>
        <Route path='/auth/login' element={<AuthPages.Login />}/>
        <Route path='*' element={<Navigate to={'/auth/login'} />} />
      </Routes>
    </React.Fragment>
  )
}