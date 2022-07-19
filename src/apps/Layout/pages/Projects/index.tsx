import React from 'react'
import styles from './index.module.scss'
import { useAuth } from '../../../../providers/useAuth';
import { IProjects, IUser, TypeSetState } from '../../../../types';
import { Loader } from '../../../../components/Loader';
import { GrLocationPin } from 'react-icons/gr'
import { CgArrowsExpandUpRight } from 'react-icons/cg'
import { FaUsersCog } from 'react-icons/fa'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface IProjectProps {
  setHeaderTitle: TypeSetState<string>
};

export const Projects: React.FunctionComponent<IProjectProps> = ({ setHeaderTitle }: IProjectProps) => {
  const { projects } = useAuth();
  const navigate = useNavigate()
  
  if(!projects) return <Loader />;

  return (
    <section className={styles.project_container}>
      <div className={styles.project_row}>
        {projects?.map((item: IProjects) => (
          <div key={item.id} className={styles.project_card}>
            <div className={styles.projects_status}>
              <span>статус: <span className={styles.status + ' text-success'}>{item.status}</span></span>
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


            <div className='mt-5 '>
              <Button  
                colorScheme={"facebook"} 
                className="w-100"
                onClick={() => {
                  navigate(`/projects/${item.id}/${item.caption}`);
                  setHeaderTitle(`Подробнее о проекте`)
                }}
              >
                Подробнее
              </Button>
            </div>
            {/* Devs */}
            {/* <div className={styles.projects_dev_title}>
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
            </ul> */}

          </div>
        ))}
      </div>
    </section>
  )
};

