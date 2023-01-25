import { Link } from 'react-router-dom';
import VisuallyHidden from '../../../../components/baseComponents/VisuallyHidden';
import { TopicResponse } from '../../../../interfaces/topic.interface';
import * as S from './styles';

const CardTopic: React.FC<TopicResponse> = ({
  id,
  title,
  description,
}: TopicResponse) => {
  return (
    <S.Card>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link to={`/topics/${id}`}>
        Ver Pauta <VisuallyHidden>{title}</VisuallyHidden>
      </Link>
    </S.Card>
  );
};

export default CardTopic;
