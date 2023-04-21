import { FC, useContext } from 'react';
import './Tag.scss'
import LanguagesContext, { MaterialContextType } from '../../context/LanguagesContext';

type Props = {
  // define props here
  label: string,
  value: string,
}

const Tag: FC<Props> = ({ label, value }) => {
  const { filterLanguages }: MaterialContextType = useContext(LanguagesContext)
   
  const handleTagClick = () => {
    filterLanguages(value)
  }

  return (
    // JSX code here
    <div className='tag' onClick={handleTagClick}>{label}</div>
  );
}

export default Tag;
