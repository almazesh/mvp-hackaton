import React from 'react'

interface IButtonSubmit {
  title:string
}

export const ButtonSubmit = ({title} : IButtonSubmit) => 
  <button 
    type='submit'
    className='btn btn-primary p-3 w-100 mt-3 text-light' 
    style={{fontSize:'18px'}}
  >
    {title}
  </button>
