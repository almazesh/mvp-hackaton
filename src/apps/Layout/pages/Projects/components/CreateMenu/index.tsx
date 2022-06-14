import React from 'react'
import styles from './index.module.scss'

interface ICreateMenu {
  toggleCreateMenu: boolean
}

export const CreateProjectMenu: React.FunctionComponent<ICreateMenu> = ({toggleCreateMenu} :ICreateMenu) => {
  return (
    <section className={toggleCreateMenu ? styles.draggable_container_active : styles.draggable_container}>
      
    </section>
  )
}
