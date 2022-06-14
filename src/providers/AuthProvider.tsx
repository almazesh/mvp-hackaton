import { createContext, ReactElement } from "react"
import { IContext, IUser } from '../types';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { authentification } from '../firebase/index';

interface IProps {
  children: ReactElement
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: React.FunctionComponent<IProps> = ({children}) => {
  const [user , setUser] = React.useState<IUser | null>(null)
  const [loading , setLoading] = React.useState<boolean>(true)
  const navigate = useNavigate()


  React.useEffect(() => {
    const Listen = onAuthStateChanged(authentification , auth => {
      if(auth) {
        setLoading(false)
        setUser({
          id:auth.uid,
          email:auth.email || '',
          avatar:auth.photoURL || '',
          name:auth.displayName || '',
        })
      }else{
        setUser(null)
        navigate('/auth') 
        setLoading(false)
      }
    }) 
    return () => Listen()
  },  [])
  
  const state = React.useMemo(() => ({
    user,
    setUser,
    loading
  }), [user , setUser, loading])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}