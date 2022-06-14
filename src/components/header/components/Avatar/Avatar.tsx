import { Link } from 'react-router-dom';
import { useAuth } from '../../../../providers/useAuth';

// CSS imports

import './index.scss'

export const Avatar = () => {
  const { user } = useAuth()

  return (
    <div>
      <Link
        to="" 
        className="navbar-brand d-flex align-items-center avatar"
      >
        <img
          src={user?.avatar} 
          alt=""
        />
        <span className='avatarname'>
          {user?.name}
        </span>
      </Link>
    </div>
  )
}