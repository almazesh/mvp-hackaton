import React from 'react';
import { endPoints } from '../../../api/API';



export const useRegister = () => {

  const post = React.useCallback((data:Object) => {
    return endPoints.handleAuthRegister(data)
  }, [])

  return {
    actions: {
      post,
    }
  }
}