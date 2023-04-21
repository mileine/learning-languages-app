import { useContext, useEffect, useState } from 'react'
import LanguagesContext, { MaterialContextType, MaterialType } from './context/LanguagesContext'
import './App.scss'
import TagContainer from './components/TagContainer/TagContainer';
import ListContainer from './components/ListContainer/ListContainer';
import FaveCardContainer from './components/FaveCardContainer/FaveCardContainer';

function App() {
  const { appState }: MaterialContextType = useContext(LanguagesContext)
  const [listItems, setListItems] = useState(()=> appState.lessons)
  const faveItems: MaterialType[] =  appState.lessons.filter(item => item.bookmark)
  const tags = new Set<string>();
  appState.lessons.forEach(item => item.tags.forEach(tag => tags.add(tag)))
  console.log(tags)
  const tagsArray = Array.from(tags)

  useEffect(() => {
    if (appState.selectedTag !== 'todos') {
      setListItems(appState.selectedItems)
    } else {
      setListItems(appState.lessons)
    }
  },[appState.lessons, appState.selectedItems, appState.selectedTag])

  return (
    <div className='app'>
      <div className="app__header">
        <span>Learning Languages</span>
      </div>
      <div className="app__container">
        <h2>Destaques</h2>
        <FaveCardContainer materialList={faveItems}/>
        <h2>Filtros</h2>
        <TagContainer tags={tagsArray}/>
        <ListContainer materialList={listItems}/>
      </div>
    </div>
  )
}

export default App
