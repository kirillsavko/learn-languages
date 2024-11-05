import AuthRoute from '@/components/AuthRoute/AuthRoute'
import { FC, ReactNode, useMemo } from 'react'
import { Button } from '@/components/Button/Button'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
import { chooseLevel, resetLevel, wordsSelector } from '@/store/slices/words'
import { useAppDispatch } from '@/store/hooks'
import { Level, Word } from '@/types/words'
import { WordToTranslate } from '@/components/WordToTranslate/WordToTranslate'

const levelMapping: Record<Level, Level> = {
  'A1': 'A1',
  'A2': 'A2',
  'B1': 'B1',
  'B2': 'B2',
  'C1': 'C1',
  'C2': 'C2',
}

const ChooseLevel: FC = () => {
  const dispatch = useAppDispatch()
  const { chosenLevel } = useSelector(wordsSelector)

  let title: string
  let buttons: ReactNode

  if (chosenLevel === null) {
    title = 'Choose level'
    buttons = Object.keys(levelMapping).map((level: Level) => (
      <Button key={level} onClick={() => dispatch(chooseLevel(level))}>{level}</Button>
    ))
  } else {
    title = `Chosen level: ${chosenLevel}`
    buttons = <Button onClick={() => dispatch(resetLevel())}>Back to all levels</Button>
  }

  return <div className={styles['home__level']}>
    <h2 className={styles['home__level-title']}>{title}</h2>
    <div className={styles['home__level-buttons']}>{buttons}</div>
  </div>
}

const Words: FC = () => {
  const { chosenLevel, words } = useSelector(wordsSelector)

  const foundWord: Word | undefined = useMemo(() => {
    const filteredWords = words.filter(word => word.level === chosenLevel && !word.done)
    const randomWordIndex = Math.floor(Math.random() * filteredWords.length)
    return filteredWords[randomWordIndex]
  }, [chosenLevel, words])

  if (chosenLevel === null) {
    return null
  }

  if (!foundWord) {
    return <div className={styles['home__words']}>
      <h3>Congrats! You have done all words for the chosen level!</h3>
    </div>
  }

  return <div className={styles['home__words']}>
    <h3>Click on the card to see the translation</h3>
    <WordToTranslate word={foundWord}/>
  </div>
}

export default function Home() {
  return (
    <AuthRoute>
      {() => (
        <div className='container'>
          <ChooseLevel />
          <Words />
        </div>
      )}
    </AuthRoute>
  )
}
