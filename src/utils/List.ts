import { AiOutlineLogout} from 'react-icons/ai'
import {FaUserAlt, FaUsers , FaProjectDiagram} from 'react-icons/fa'

export const sidebarListTop = [
  {
    id:1,
    title:'Проекты',
    icon:FaProjectDiagram,
    path:'/'
  },
  {
    id:2,
    title:'Команда',
    icon:FaUsers,
    path:'/team'
  },
  {
    id:3,
    title:'Профиль',
    icon: FaUserAlt,
    path:'/profile'
  },
]

export const sidebarBottomList = [
  {
    id:1,
    title:'Выйти',
    icon: AiOutlineLogout,
    path:'/logout'
  },
]