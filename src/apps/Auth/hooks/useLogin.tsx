import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authentification } from '../../../firebase/index';
import React from 'react';

export const useLogin = () => {
  const provider = new GoogleAuthProvider()
  const [loaded, setLoaded] = React.useState<boolean>(false)

  const post = React.useCallback(() => {
    setLoaded(true)
    signInWithPopup(authentification , provider)
      .finally(() => setLoaded(false))
  }, [])

  return {
    loaded,
    actions: {
      post,
    }
  }
}