import React from 'react'
import { ImFilesEmpty } from 'react-icons/im'

const ProjectUndo = () => {
  return (
    <div 
      className='d-flex justify-content-center align-items-center' 
      style={{height:'70vh'}}
    >
      <div className='text-center'>
        <div className='d-flex justify-content-center flex-column align-items-center'>
          <ImFilesEmpty className='display-2'/>
          <span className='mt-3 h4'>
            Проектов нет! 
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectUndo