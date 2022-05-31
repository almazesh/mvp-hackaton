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

export default function AuthProvider({children}: IProps){
  const [user , setUser] = React.useState<IUser | null>(null)
  const navigate = useNavigate()

  React.useEffect(() => {

    const Listen = onAuthStateChanged(authentification , auth => {
      console.log(auth)
      if(auth) {
        setUser({
          id:auth.uid,
          avatar:auth.photoURL || '',
          name:auth.displayName || '',
        })
      }else{
        setUser(null)
        navigate('/auth') 
      }
    }) 
    return () => Listen()
  },  [])
  
  const state = React.useMemo(() => ({
    user,
    setUser,
  }), [user , setUser])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}