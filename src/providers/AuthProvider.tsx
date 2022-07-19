import React from 'react';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';
import { allEndpoints } from '../api';
import { useNavigate } from 'react-router-dom';

interface IProps {
  children: React.ReactElement
};

export const AuthProvider: React.FunctionComponent<IProps> = (props: IProps) => {
  const [isLoaded , setIsLoaded] = React.useState(false);
  const [user , setUser] = React.useState(null);
  const [users , setUsers] = React.useState(null);
  const [token , setTokenData] = React.useState(null);
  const [projects , setProjects] = React.useState(null);
  const [alert , setAlert] = React.useState(false);
  const [alertTitle , setAlertTitle] = React.useState('')
  const [reRenderer , setReRenderer] = React.useState('work')
  const navigate = useNavigate()

  const goToMain = React.useCallback(() => navigate('/') , [navigate])

  const setToken = React.useCallback((tokenData: string | any) => {
    setTokenData(tokenData);

    if(tokenData){
      Cookies.set("auth-token" , tokenData);
    } else{
      Cookies.remove("auth-token");
    }
  }, []);

  const logOut = React.useCallback(() => {
    setUser(null);
    setToken(null);
  }, [setToken]);

  const loadData = React.useCallback( async () => {
    const tokenData: any = Cookies.get("auth-token");
    setTokenData(tokenData);

    try{
      if(tokenData) {
        allEndpoints.endPoints.handleGetProfile().then(res => {
          const users = res.data;

          const currentUserName = Cookies.get('username');

          const currentUser = users.find((item: any) => item.username === currentUserName);

          setUser(currentUser);
        })
      }
    }catch{
      setToken(null);
    } finally {
      setIsLoaded(true);
    }
  }, [setToken]);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  // GET ALL USER

  React.useEffect(() => {
    allEndpoints.endPoints.handleGetAllUser().then(res => {
      const users = res.data;

      setUsers(users);
    })
  }, []);

  // GET ALL PROJECTS

  React.useEffect(() => {
    allEndpoints.endPoints.handleGetAllProjects()
      .then(res => {
        const data = res.data;
        setProjects(data);
        setReRenderer('workd')
      })
  }, [reRenderer]);

  const contextValue = React.useMemo(
    () => ({
      isLoaded,
      user,
      token,
      setUser,
      setToken,
      logOut,
      users,
      projects,
      setAlert,
      alert,
      setReRenderer,
      alertTitle,
      setAlertTitle,
      goToMain
    }), 
    [
      isLoaded ,
      user , 
      token , 
      setUser, 
      setToken ,
      logOut ,
      users, 
      projects,
      setAlert,
      alert,
      setReRenderer,
      alertTitle,
      setAlertTitle,
      goToMain
    ]
  );

  return <AuthContext.Provider value={contextValue}>
            {props.children}
         </AuthContext.Provider>
};