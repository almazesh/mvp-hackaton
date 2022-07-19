import React from 'react'
import styles from './index.module.scss'
import { useAuth } from '../../../../providers/useAuth';
import { IProjects, IUser, TypeSetState } from '../../../../types';
import { Loader } from '../../../../components/Loader';
import { GrLocationPin } from 'react-icons/gr'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { FaUsersCog } from 'react-icons/fa'
import { FormControl, Switch, Button } from '@chakra-ui/react';
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { allEndpoints } from '../../../../api';

interface IProjectProps {
  setHeaderTitle: TypeSetState<string>
};

export const Projects: React.FunctionComponent<IProjectProps> = ({ setHeaderTitle }: IProjectProps) => {
  const { projects , users , setReRenderer , setAlert , setAlertTitle} = useAuth();
  
  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement> , ids: number) => {
    const event = e.target.checked;

    allEndpoints.endPoints.handlePatchProjectStatus(ids , 
      event ? {status: 'inactive'} : {status: 'active'}
    )
      .then(res => {
        setReRenderer('worlk')
      })
  };

  const handleDelete = (id: number) => {
    allEndpoints.endPoints.handleDeleteProject(id)
      .then(res => {
        setReRenderer('delete')
        setAlert(true)
        setAlertTitle('Успешно удалено!')
    })
  }


  if(!projects) return <Loader />;

  if(projects.length === 0) return <h1>None</h1>

  return (
    <section className={styles.project_container}>
      <div className={styles.project_row}>
        {projects?.map((item: IProjects) => (
          <div key={item.id} className={styles.project_card}>
            <div className={styles.projects_status}>
              <span>статус: <span className={item.status === 'active' ? styles.status + ' text-success' : styles.status + ' text-danger'}>{item.status}</span></span>
            </div>
            <h1>{item.caption}</h1>

            {/* Times */}

            <div className={styles.project_time_row}>
              <span>
                <i className={styles.success_status}/>
                <GrLocationPin />
                {item.start}  
              </span>
              <span>
                <CgArrowsExpandUpRight className={styles.arrow_toRight}/>
              </span>
              <span>
                <i className={styles.danger_status}/>
                {item.deadline}
                <GrLocationPin />
              </span>
            </div>
            <div>
              <hr className={styles.projects_divider}/>
              <div className={styles.projects_timeStatus}>
                <span>начала</span>
                <span>конец</span>
              </div>
            </div>

            {/* Devs */}
            <div className={styles.projects_dev_title}>
              <span>Участники проекта</span>
              <FaUsersCog />
            </div>

            <ul className={styles.projects_developers}>
              {
                users?.map((user:IUser) => {
                  return item.developers.map((devId: number) => {
                    if(devId === user.id) return (
                      <li key={devId}>
                        <span>{user.username}</span> 
                          - 
                        <span>{user.role}</span>
                      </li>
                    )
                  })
                })
              }
            </ul>
            <FormControl 
              display='flex' 
              alignItems='center' 
              justifyContent={"space-between"}
              className="mt-5"
            >
              <Button 
                onClick={() => handleDelete(item.id)} 
                colorScheme={"red"} 
                disabled={item.status === 'active' ? true : false}
              >
                <RiDeleteBin5Fill />
              </Button>
              <Switch  
                isChecked={item.status === 'inactive' ? true : false}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSwitch( e, item.id)} />
            </FormControl>
          </div>
        ))}
      </div>
    </section>
  )
};

