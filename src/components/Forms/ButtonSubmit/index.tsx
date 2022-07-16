import React from 'react'

interface IButtonSubmit {
  title:string
  classStyle: string
  validBtn: boolean
}

export const ButtonSubmit = ({title , classStyle, validBtn} : IButtonSubmit) => 
  <button 
    type='submit'
    className={`btn ${classStyle} p-3 w-100 mt-4 text-light`}
    style={{fontSize:'18px',cursor:'pointer'}}
    disabled={!validBtn}
  >
    {title}
  </button>
