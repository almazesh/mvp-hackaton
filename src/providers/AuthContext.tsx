import { IContext } from '../types';
import React from 'react';


export const AuthContext = React.createContext<IContext>(
  {
    isLoaded:false,
    user:null,
    token:null,
    setUser: () => {},
    setToken: () => {},
    logOut: () => {},
    users: null,
    projects: null,
    setAlert: () => {},
    alert: false,
    setReRenderer: () => {},
    alertTitle: '',
    setAlertTitle: () => {},
    goToMain: () => {}
  } as IContext)

