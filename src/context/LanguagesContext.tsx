import { createContext, PropsWithChildren, useState } from "react";
import data from '../data/data.json'

export type MaterialType = {
  id: number,
  title: string,
  description: string,
  logoUrl: string,
  vocabularyAmountGoal: number,
  currentAmount: number,
  learningSessionsCount: number,
  tags: string[],
  bookmark?: boolean
}

export type AppStateType = {
  lessons: MaterialType[],
  selectedItems: MaterialType[],
  selectedTag?: string | null
}

export type MaterialContextType = {
  appState: AppStateType,
  filterLanguages: (tag: string) => void
}

export const LanguagesContext = createContext<MaterialContextType>({} as MaterialContextType)

export const LanguagesContextProvider = ({ children }: PropsWithChildren) => {
  const [appState, setAppState] = useState(() => data as AppStateType)

  const filterLanguages = (tag: string) => {
    // const tag: string = evt.currentTarget.value; 
    const filtered = tag === "todos"? appState.lessons :  appState.lessons.filter(item => item.tags.includes(tag))
    setAppState({...appState, selectedItems: filtered, selectedTag: tag})
  }

  const value: MaterialContextType = {
    appState,
    filterLanguages
  }

  return (
    <LanguagesContext.Provider value={value}>
      {children}
    </LanguagesContext.Provider>
  )
}

export default LanguagesContext