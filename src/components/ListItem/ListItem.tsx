import { FC } from 'react';
import { MaterialType } from '../../context/LanguagesContext';
import './listItem.scss'

type Props = {
  material: MaterialType,
}

const ListItem: FC<Props> = ({ material }) => {

  return (
    <div className='list-item'>
      <div className="list-item__info">
        <span className="list-item__info--title">{material.title}</span>
        <span>{material.description}</span>
      </div>
      <div className="list-item__tags">
        {
          material.tags.map(tag => (
            <span className='list-item__tag'>{tag}</span>
          ))
        }
      </div>
    </div>
  );
}

export default ListItem;
