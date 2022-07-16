import { Checkbox, Stack } from "@chakra-ui/react";
import React, { LegacyRef } from "react";
import { IUser } from '../../../types';

interface ICheckType {
  usersProps: IUser[]
  label: string
  getParticipants: any
}

export const ChooseDevCheckbox: React.ForwardRefExoticComponent<ICheckType> = React.forwardRef(({
  usersProps,
  label,
  getParticipants
} , ref:  LegacyRef<HTMLInputElement>) => {
  return (
    <React.Fragment>
      <label className="text-muted">{label}</label>
      <Stack 
        spacing={20} 
        marginTop={3} 
        direction='row'
      >
        {usersProps.map((item: IUser) => (
          <label key={item.id}>
            <input 
              ref={ref}
              className="form-checkbox me-2"
              type={'checkbox'}
              id={String(item.id)}
              onChange={getParticipants} 
            />
            { item.username}
          </label>
        ))}
      </Stack>
    </React.Fragment>
  )
})