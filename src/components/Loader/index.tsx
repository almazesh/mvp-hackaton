import styles from './index.module.scss'
import React from 'react';

export const Loader:React.FunctionComponent = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <div className={styles.lds_ripple}><div></div><div></div></div>
    </div>
  )
}