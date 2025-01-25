import React from 'react'
import styles from "./Button.module.css"

export const Button = ({children}) => {
  return (
    <button className={styles.btn} >Give Feedback</button>
  )
}
