import React from 'react';
import { endPoints } from '../../../api/API';



export const useLogin = () => {

  const post = React.useCallback((data:Object) => {
    return endPoints.handleAuthLogin(data)
  }, [])

  return {
    actions: {
      post,
    }
  }
}