import { FC, useState } from 'react'
import { Word } from '@/types/words'
import styles from './WordToTranslate.module.scss'
import { useAppDispatch } from '@/store/hooks'
import { makeWordDone } from '@/store/slices/words'

type Step = 'EN' | 'RU'

type WordProps = {
  word: Word
}

export const WordToTranslate: FC<WordProps> = ({ word }) => {
  const dispatch = useAppDispatch()
  const [step, setStep] = useState<Step>('EN')

  const goToNextStep = () => {
    if (step === 'EN') {
      setStep('RU')
    } else {
      dispatch(makeWordDone(word))
      setStep('EN')
    }
  }

  return (
    <button
      type='button'
      className={`${styles['word-to-translate']} ${step === 'RU' && styles['word-to-translate--active']}`}
      onClick={goToNextStep}
    >
      <span className={styles['word-to-translate__inner']}>
        <span className={styles['word-to-translate__front']}>{word.en}</span>
        <span className={styles['word-to-translate__back']}>{word.ru}</span>
      </span>
    </button>
  )
}
