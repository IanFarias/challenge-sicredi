import { Link } from 'react-router-dom';
import VisuallyHidden from '../../../../components/baseComponents/VisuallyHidden';
import { TopicResponse } from '../../../../interfaces/topic.interface';
import * as S from './styles';

interface CardProps {
  id: number;
  title: string;
  description: string;
}

const CardTopic: React.FC<CardProps> = ({
  id,
  title,
  description,
}: CardProps) => {
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
