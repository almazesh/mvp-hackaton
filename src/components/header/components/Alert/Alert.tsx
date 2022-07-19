
import { Alert, AlertIcon } from '@chakra-ui/react';
import { useAuth } from '../../../../providers/useAuth';
import './index.scss'

export const AlertAuth = ( ) => {
  const { alert , setAlert} = useAuth()

  const handleClose = () => setAlert(false)

  return (
    <div className={alert ? 'alertAuth showAlert' : 'alertAuth'}>
      <Alert status='success'  className='d-flex justify-content-between'>
        <div className='d-flex'>
          <AlertIcon />
          Успешная авторизация!
        </div>
        <div className='closeItem' onClick={handleClose}>&times;</div>
      </Alert>
    </div>
  )
}