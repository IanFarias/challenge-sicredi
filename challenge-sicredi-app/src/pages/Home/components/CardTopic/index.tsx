import { Link } from 'react-router-dom';
import VisuallyHidden from '../../../../components/baseComponents/VisuallyHidden';
import { ITopicSimplified } from '../../../../interfaces/topic.interface';
import * as S from './styles';

const CardTopic: React.FC<ITopicSimplified> = ({
  id,
  title,
  description,
  isFinished,
}: ITopicSimplified) => {
  return (
    <S.Card>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {isFinished && (
          <S.FinishedMessage>Essa pauta já foi encerrada.</S.FinishedMessage>
        )}
      </div>
      <Link to={`/topics/${id}`}>
        Ver Pauta <VisuallyHidden>{title}</VisuallyHidden>
        <span className="arrow"></span>
      </Link>
    </S.Card>
  );
};

export default CardTopic;
