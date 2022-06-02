import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaUsers} from 'react-icons/fa'

export const sidebarList = [
  {
    id:1,
    title:'Главная',
    icon: AiFillHome,
    path:'/'
  },

  {
    id:2,
    title:'Профиль',
    icon: FaUserAlt,
    path:'/profile'
  },

  {
    id:3,
    title:'Команда',
    icon:FaUsers,
    path:'/team'
  },
]