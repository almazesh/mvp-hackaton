import React from 'react'
import styles from './index.module.scss'

interface IProjectProps {
  toggleCreateMenu: boolean
}

export const Projects: React.FunctionComponent<IProjectProps> = ({toggleCreateMenu}: IProjectProps) => {

  
  return (
    <section className={styles.project_container}>
      
    </section>
  )
}

