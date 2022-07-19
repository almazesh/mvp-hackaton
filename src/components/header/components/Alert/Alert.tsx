
import { Alert, AlertIcon } from '@chakra-ui/react';
import { useAuth } from '../../../../providers/useAuth';
import './index.scss'

export const AlertAuth: React.FunctionComponent = ( ) => {
  const { alert , setAlert , alertTitle} = useAuth()

  const handleClose = () => setAlert(false)

  return (
    <div className={alert ? 'alertAuth showAlert' : 'alertAuth'}>
      <Alert status='success'  className='d-flex justify-content-between'>
        <div className='d-flex'>
          <AlertIcon />
          {alertTitle}
        </div>
        <div className='closeItem' onClick={handleClose}>&times;</div>
      </Alert>
    </div>
  )
}