import { ReactElement } from "react"
import React from 'react';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';
import { allEndpoints } from '../api/index';

interface IProps {
  children: ReactElement
}

export const AuthProvider: React.FunctionComponent<IProps> = (props: IProps) => {
  const [isLoaded , setIsLoaded] = React.useState(false);
  const [user , setUser] = React.useState(null);
  const [token , setTokenData] = React.useState(null);

  const setToken = React.useCallback((tokenData: string | any) => {
    setTokenData(tokenData)

    if(tokenData){
      Cookies.set("auth-token" , tokenData)
    } else{
      Cookies.remove("auth-token")
    }
  }, [])

  const logOut = React.useCallback(() => {
    setUser(null);
    setToken(null);
  }, [setToken])

  const loadData = React.useCallback( async () => {
    const tokenData: any = Cookies.get("auth-token");
    setTokenData(tokenData);

    try{
      if(tokenData) {
        allEndpoints.endPoints.handleGetProfile().then(res => {
          const users = res.data;

          const currentUserName = Cookies.get('username');

          const currentUser = users.find((item: any) => item.username === currentUserName);

          setUser(currentUser)
        })
      }
    }catch{
      setToken(null)
    } finally {
      setIsLoaded(true)
    }
  }, [setToken])

  React.useEffect(() => {
    loadData();
  }, [loadData])

  const contextValue = React.useMemo(
    () => ({
      isLoaded,
      user,
      token,
      setUser,
      setToken,
      logOut
    }), 
    [isLoaded , user , token , setUser, setToken ,logOut]
  )

  return <AuthContext.Provider value={contextValue}>
            {props.children}
         </AuthContext.Provider>
}