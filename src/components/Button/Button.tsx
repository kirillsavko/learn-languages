import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './Button.module.scss'

export const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = props => {
  return <button {...props} className={`
    ${styles.button} ${props.className}
  `}
  >
    {props.children}
  </button>
}
