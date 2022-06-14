import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authentification } from '../../../firebase/index';
import React from 'react';



export const useRegister = () => {


  const post = React.useCallback( 
    async (email:any , password:any, username:any,photo:any
    ) => {
    try{
      const res = await createUserWithEmailAndPassword(authentification ,email  , password )
      window.location.reload()
      await updateProfile(res.user ,{
        displayName: username,
        photoURL: photo
      })
    }catch{
      
    }
  }, [])

  return {
    actions: {
      post,
    }
  }
}