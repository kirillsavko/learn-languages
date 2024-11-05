import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/types'
import { Level, Word } from '@/types/words'
import { allWords } from '@/constants/words'

type WordsState = {
  words: Word[]
  chosenLevel: Level | null
}

const initialState: WordsState = {
  words: allWords,
  chosenLevel: null,
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    makeWordDone: (state: WordsState, action: PayloadAction<Word>) => {
      state.words = state.words.map(word => {
        if (word.en.toLowerCase() === action.payload.en.toLowerCase()) {
          return {
            ...word,
            done: true,
          }
        }
        return word
      })
    },
    chooseLevel: (state: WordsState, action: PayloadAction<Level>) => {
      state.chosenLevel = action.payload
    },
    resetLevel: (state: WordsState) => {
      state.chosenLevel = null
    }
  },
})

export const wordsReducer = wordsSlice.reducer
export const wordsSelector = (state: RootState) => state.words
export const { makeWordDone, chooseLevel, resetLevel } = wordsSlice.actions
