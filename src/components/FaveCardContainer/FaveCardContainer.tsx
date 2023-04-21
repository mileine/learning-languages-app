import { FC } from 'react';
import { MaterialType } from '../../context/LanguagesContext';
import './faveCardContainer.scss'
import FaveCard from '../FaveCard/FaveCard';

type Props = {
  materialList: MaterialType[],
}

const FaveCardContainer: FC<Props> = ({ materialList }) => {
  return (
    <div className='fave-card-container'>
      {
        materialList.map(material => (
          <FaveCard material={material} key={material.id}/>
        ))
      }
    </div>
  );
}

export default FaveCardContainer;
