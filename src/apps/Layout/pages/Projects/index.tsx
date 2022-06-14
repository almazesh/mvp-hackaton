import React from 'react'
import { CreateProjectMenu } from './components/CreateMenu/index';
import styles from './index.module.scss'

interface IProjectProps {
  toggleCreateMenu: boolean
}

export const Projects: React.FunctionComponent<IProjectProps> = ({toggleCreateMenu}: IProjectProps) => {
  return (
    <section className={styles.project_container}>

      {/* Menu of creating project */}
      <section>
        <CreateProjectMenu toggleCreateMenu={toggleCreateMenu}/> 
      </section>




    </section>
  )
}

