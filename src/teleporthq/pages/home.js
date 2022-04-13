import React from 'react'
import Timer from '../../widgets/timer'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Normal Easy Peafowl</title>
        <meta property="og:title" content="Normal Easy Peafowl" />
      </Helmet>
      <h1 className={styles['text']}>
        <span>Hello! :) --</span>
      </h1>
      <AppComponent></AppComponent>
      <Timer></Timer>
      <Timer></Timer>
    </div>
  )
}

export default Home
