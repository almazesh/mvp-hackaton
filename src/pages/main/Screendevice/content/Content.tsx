import React from "react";
import Header from '../../../../components/header/Header';
import styles from './index.module.scss'


export default function Content(){
  return(
    <React.Fragment>
     <section className={styles.content_parent}>
      <header>
        <Header />
      </header>
      <main>

      </main>
      <footer>

      </footer>
     </section>
    </React.Fragment>
  )
}