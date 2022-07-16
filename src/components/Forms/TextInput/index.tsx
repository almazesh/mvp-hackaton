import React, { LegacyRef } from 'react';
import { IFormInput } from '../../../types';
import { BiCheck } from 'react-icons/bi'

export const TextInput: React.ForwardRefExoticComponent<IFormInput> = React.forwardRef(({
  type = 'text',
  placeholder,
  labels,
  className,
  handleValid,
  ...rest
}: IFormInput, ref: LegacyRef<HTMLInputElement> ) => {
  return (
    <label className='w-100 mt-2 text-muted'>
      <span 
      > 
        <span>{labels}</span>
        {
          handleValid && <span className='d-flex text-info'>Успешно <BiCheck /> </span> 
        }
      </span>
      <input 
        type={type}
        className={className}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />  
    </label>
  )
})