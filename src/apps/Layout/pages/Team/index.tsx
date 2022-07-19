import * as React from 'react';
import { useAuth } from '../../../../providers/useAuth';
import { IUser } from '../../../../types';
import './index.css'

export const Team: React.FunctionComponent = () => {
  const { users , user } = useAuth()

  return (
    <div className='me-5'>
      <table className="table" >
        <thead style={{background:'#211F29'}} className="text-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Имя</th>
            <th scope="col">Стэк</th>
            <th scope="col">Тип</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((item: IUser) => (
              <tr 
                key={item.id} 
                style={user?.id === item.id ? {height:'70px', background:'#211F29'} : {height:'70px'}}  
                className={user?.id === item.id ? 'text-light' : ''}
              >
                <th className="pt-4" scope="row">{item.id}</th>
                <td className="pt-4"><b>{item.username}</b></td>
                <td className="pt-4">{item.role}</td>
                <td className="pt-4">
                  {item.role === 'Front-end' && <div className='front me-2'></div>}
                  {item.role === 'Back-end' && <div className='back me-2'></div>}
                  {item.role === 'Designer' && <div className='designer me-2'></div>}
                  {item.role === 'PM' && <div className='PM me-2'></div>}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
