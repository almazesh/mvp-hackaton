import React, { LegacyRef } from 'react';
import { IFormInput } from '../../../types';


export const TextInput: React.ForwardRefExoticComponent<IFormInput> = React.forwardRef(({
  type = 'text',
  placeholder,
  setInputsValue,
}: IFormInput, ref: LegacyRef<HTMLInputElement> ) => {
  return (
    <input 
      type={type}
      className={'form-control p-3'}
      placeholder={placeholder}
      ref={ref}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputsValue(e.target.value)}
    />  
  )
})