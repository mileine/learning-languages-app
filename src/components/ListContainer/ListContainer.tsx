import { FC } from 'react';
import { MaterialType } from '../../context/LanguagesContext';
import ListItem from '../ListItem/ListItem';
import './listContainer.scss'

type Props = {
  materialList: MaterialType[],
}

const ListContainer: FC<Props> = ({ materialList }) => {
  return (
    <div className='list-container'>
      {
        materialList.map(material => (
          <ListItem material={material} key={material.id}/>
        ))
      }
    </div>
  );
}

export default ListContainer;
