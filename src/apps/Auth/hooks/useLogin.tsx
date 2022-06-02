import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authentification } from '../../../firebase/index';
import React from 'react';

export const useLogin = () => {
  const provider = new GoogleAuthProvider()

  const post = React.useCallback(() => {
    signInWithPopup(authentification , provider)
  }, [])

  return {
    actions: {
      post,
    }
  }
}