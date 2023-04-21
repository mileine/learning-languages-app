import { FC } from 'react';
import { MaterialType } from '../../context/LanguagesContext';
import './faveCard.scss'

type Props = {
  material: MaterialType,
}

const FaveCard: FC<Props> = ({ material }) => {

  return (
    <div className='fave-card'>
      <div className="fave-card__info">
        <span className="fave-card__info--title">{material.title}</span>
        <span>{material.description}</span>
      </div>
    </div>
  );
}

export default FaveCard;
