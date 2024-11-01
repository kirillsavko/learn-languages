import { FC, InputHTMLAttributes } from 'react'
import styles from './Form.module.scss'

export const Form: FC<InputHTMLAttributes<HTMLFormElement>> = props => {
  return <form {...props} className={`${styles.form} ${props.className}`}>
    {props.children}
  </form>
}
