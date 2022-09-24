import React from 'react'
import { useAuth } from '../../providers/useAuth';

const Filter = () => {
  const { setProjects , projects, setReRenderer } = useAuth();

  const handleSearchByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = projects?.filter(item => 
      item.caption.toLowerCase().includes(value.toLowerCase()));

    setProjects(filtered);
  };

  const widthInputsCss = {
    width:'310px'
  }

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const filtered = projects?.filter(item => item.status === value);

    setProjects(filtered);
  } 

  return (
    <React.Fragment>
      <div className='d-flex align-items-center' style={{gap:'2.5rem'}}>
        <div className='col-sm-12' style={widthInputsCss}>
          <label className='w-100'>
            Фильтрация по имени
            <input 
              onChange={handleSearchByName}
              type="text" 
              className='form-control p-3 mt-2' 
              placeholder="Поиск по имени"
            />
          </label>
        </div>
        <div className='col-sm-12' style={widthInputsCss}>
          <label className='w-100'>
            Установить статус
            <select className='form-select p-3 mt-2' onChange={handleChangeStatus}>
              <option value="">Фильтрация по статусу</option>
              <option value="active">Активный</option>
              <option value="inactive">Неактивный</option>
            </select>
          </label>
        </div>
        <div className='col-sm-12' style={widthInputsCss}>
          <label className=' w-100'>
            От n даты
            <input type="date" className='form-control p-3 mt-2'/>
          </label>
        </div>
        <div className='col-sm-12' style={widthInputsCss}>
          <label className=' w-100'>
            До n даты
            <input type="date" className='form-control p-3 mt-2'/>
          </label>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Filter;