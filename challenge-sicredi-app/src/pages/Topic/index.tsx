import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/baseComponents/Button';
import Modal from '../../components/Modal';
import { ITopicDetailed } from '../../interfaces/topic.interface';
import { useChallengeApi } from '../../services/api/useChallengeApi';
import { formatDate, formatMinutesToHour } from '../../utils/dateFormatters';
import ModalOpenSession from './components/ModalOpenSession';
import ModalVote from './components/ModalVote';
import * as S from './styles';

const Topic: React.FC = () => {
  const [topic, setTopic] = useState<ITopicDetailed | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();

  const { getTopicById } = useChallengeApi();

  useEffect(() => {
    const getInfo = async () => {
      const response = await getTopicById(Number(id));

      setTopic(response);
    };

    getInfo();
  }, []);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <S.Container>
      <h1>{topic?.title}</h1>
      <S.Description>{topic?.description}</S.Description>
      <S.SessionInfo>
        <h2>Sessão de Votação</h2>
        {topic?.session && (
          <>
            <span>
              {`Status da sessão: ${
                topic?.session.isOpen ? 'Aberta' : 'Fechada'
              }`}
            </span>
            <span>
              {`Duração: ${formatMinutesToHour(topic.session.duration)}`}
            </span>
            <span>
              {'Horário de abertura: ' + formatDate(topic?.session?.started_at)}
            </span>
            {!topic?.session.finished_at && (
              <span>Resultado será mostrado ao final da sessão.</span>
            )}
            {topic?.session.finished_at && (
              <span>
                {'Horário do fechamento: ' +
                  formatDate(topic?.session?.finished_at)}
              </span>
            )}

            {!topic.session.isOpen && (
              <>
                <h3>Resultado da Votação</h3>
                <span>{`Total de votos: ${topic.session.totalVotes}`}</span>
                <span>{`Votos sim: ${topic.session.positiveVotes}`}</span>
                <span>{`Votos não: ${topic.session.negativeVotes}`}</span>
              </>
            )}

            {topic?.session.isOpen && (
              <Button onClick={handleModal} type="button">
                Votar
              </Button>
            )}
          </>
        )}

        {!topic?.session && (
          <>
            <h3>Nenhuma sessão foi aberta para está pauta.</h3>
            <Button type="button" onClick={handleModal}>
              Abrir Sessão
            </Button>
          </>
        )}
      </S.SessionInfo>
      <Modal onRequestClose={handleModal} isOpen={openModal} maxWidth={'500px'}>
        {topic?.session ? (
          <ModalVote sessionId={topic.session.id} closeModal={handleModal} />
        ) : (
          <ModalOpenSession />
        )}
      </Modal>
    </S.Container>
  );
};

export default Topic;
