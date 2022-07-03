import React from 'react'
import { MdOutlineCreateNewFolder , MdCreateNewFolder } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { TypeSetState } from '../../../types';

interface IHandleIcon {
  headerTitle:string
  handleShowCreateMenu: () => void;
  setHeaderTitle: TypeSetState<string>
}

export const HandleCreateIcon: React.FunctionComponent<IHandleIcon> = (
  {
    headerTitle,
    handleShowCreateMenu,
    setHeaderTitle
  }: IHandleIcon) => {

  const [changeFolder , setChangeFolder] = React.useState<boolean>(false)

  const handleChangeCreateFolderIcon = () => setChangeFolder(prev => !prev)

  return (
    <React.Fragment>
      {
        headerTitle === 'Проекты' && 
          <div className='me-4' style={{position:'absolute',right:'6%'}}>
            {
              changeFolder ? (
                <Link to={'/create/projects'}>
                  <MdCreateNewFolder 
                  
                  onClick={() => {
                    handleShowCreateMenu()
                    setHeaderTitle('Создание проекта')
                    handleChangeCreateFolderIcon()
                  }}
                  style={{fontSize:'2rem',cursor:"pointer"}}
                />
                </Link>
              ) : (
                <Link to={'/create/projects'}>
                  <MdOutlineCreateNewFolder
                    onClick={() => {
                      handleShowCreateMenu()
                      setHeaderTitle('Создание проекта')
                      handleChangeCreateFolderIcon()
                    }}
                    style={{fontSize:'2rem',cursor:"pointer"}}
                  />
                </Link>
              )
            }
          </div>
      }
    </React.Fragment>
  )
}
