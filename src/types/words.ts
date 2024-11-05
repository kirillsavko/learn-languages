export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export type Word = {
  level: Level
  ru: string
  en: string
  done: boolean
}
