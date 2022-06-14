import React from 'react'
import { MdOutlineCreateNewFolder , MdCreateNewFolder } from 'react-icons/md'

interface IHandleIcon {
  headerTitle:string
  handleShowCreateMenu: () => void;
}

export const HandleCreateIcon: React.FunctionComponent<IHandleIcon> = (
  {
    headerTitle,
    handleShowCreateMenu
  }: IHandleIcon) => {

  const [changeFolder , setChangeFolder] = React.useState<boolean>(false)

  const handleChangeCreateFolderIcon = () => setChangeFolder(prev => !prev)


  return (
    <React.Fragment>
      {
        headerTitle === 'Проекты' && 
          <div className='me-4'>
            {
              changeFolder ? (
                <MdCreateNewFolder 
                  onClick={() => {
                    handleShowCreateMenu()
                    handleChangeCreateFolderIcon()
                  }}
                  style={{fontSize:'2rem',cursor:"pointer"}}
                />
              ) : (
                <MdOutlineCreateNewFolder
                  onClick={() => {
                    handleShowCreateMenu()
                    handleChangeCreateFolderIcon()
                  }}
                  style={{fontSize:'2rem',cursor:"pointer"}}
                />
              )
            }
          </div>
      }
    </React.Fragment>
  )
}
