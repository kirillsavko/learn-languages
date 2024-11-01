import { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input: FC<InputProps> = props => {
  return <div className={`
    ${styles.input} ${props.className}
    ${props.value && styles['input--with-value']}
  `}>
    <label>
      <span className={styles.input__wrapper}>
        <input {...props} className={styles.input__field} />
        {props.placeholder && <span className={styles.input__placeholder}>{props.placeholder}</span>}
      </span>
      {props.error && <span className={styles.input__error}>{props.error}</span>}
    </label>
  </div>
}
