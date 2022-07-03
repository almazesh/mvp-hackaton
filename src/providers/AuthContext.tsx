import { IContext } from '../types';
import React from 'react';


export const AuthContext = React.createContext<IContext>(
  {
    isLoaded:false,
    user:null,
    token:null,
    setUser: () => {},
    setToken: () => {},
    logOut: () => {}
  } as IContext)

