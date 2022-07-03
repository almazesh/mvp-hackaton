import { AiOutlineLogout} from 'react-icons/ai'
import {FaUserAlt, FaUsers , FaProjectDiagram} from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'

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
  {
    id:4,
    title:'Задачи',
    icon: BsListTask,
    path:'/todo'
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



export const roles = [
  {
    id:1,
    title:'Front-End'
  },
  {
    id:2,
    title:'Back-End'
  },
  {
    id:3,
    title:'PM'
  },
  {
    id:4,
    title:'Designer'
  },
]
