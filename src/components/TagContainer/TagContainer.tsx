import { FC } from 'react';
import Tag from '../Tag/Tag';
import './TagContainer.scss'
type Props = {
  tags: string[]
}

const TagContainer: FC<Props> = ( { tags } ) => {
   
  return (
    <div className="tags-container">
      <Tag label={"Todos"} value={"todos"}></Tag>
      {
        tags.map(tag => (
          <Tag label={tag} value={tag}/>
        ))
      }
    </div>
  );
}

export default TagContainer;