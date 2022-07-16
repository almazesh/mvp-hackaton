import React, { LegacyRef } from 'react';
import { BiCheck } from 'react-icons/bi';

interface ISelect {
  label:string
  handleValid: boolean
};

export const Select: React.ForwardRefExoticComponent<ISelect> = React.forwardRef(({ label,handleValid} , ref: LegacyRef<HTMLSelectElement> ) => {
  return (
    <div  className=' mt-4'>
      <span className='text-muted'>{label}</span>
        {
          handleValid && <span className='d-flex text-info'>Успешно <BiCheck /> </span> 
        }
      <select 
        ref={ref} 
        className="form-select p-3 mt-2"
      >
        <option value={'active'}>Active</option>
        <option value={'inactive'} disabled>UnActive</option>
        <option value={'pause'} disabled>Pause</option>
      </select>
    </div>
  )
});