import React, { LegacyRef } from 'react';
import { IFormInput } from '../../../types';

export const TextInput: React.ForwardRefExoticComponent<IFormInput> = React.forwardRef(({
  type = 'text',
  placeholder,
  ...rest
}: IFormInput, ref: LegacyRef<HTMLInputElement> ) => {
  return (
    <input 
      type={type}
      className={'form-control p-3'}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />  
  )
})