import { useAuth } from '../../../../providers/useAuth';

// CSS imports

import './index.scss'

export const Avatar = () => {
  const { user } = useAuth()

  return (
    <div className='ms-2 me-5'>
      <div
        className="navbar-brand d-flex align-items-center avatar"
      >
        <span className='avatarname me-5'>
          {user?.username} 
        </span>

        <span className='avatarstatus d-flex align-items-center'>
          {
            user?.role === 'Front-end' && (
              <div className='front me-2'></div>
            )
          }

          {
            user?.role === 'Back-end' && (
              <div className='back me-2'></div>
            )
          }

          {
            user?.role === 'Designer' && (
              <div className='designer me-2'></div>
            )
          }

          { user?.role}
        </span>
        
      </div>
    </div>
  )
}