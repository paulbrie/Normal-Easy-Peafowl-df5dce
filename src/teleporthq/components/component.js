import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <img
        src={props.image_src}
        alt={props.image_alt}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <h2 className={styles['text']}>{props.heading}</h2>
        <span>{props.text}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1648737964403-a6a32ab43e53?ixid=Mnw5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjQ5ODU4ODAz&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  heading: 'Text',
  text: 'Text',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent
