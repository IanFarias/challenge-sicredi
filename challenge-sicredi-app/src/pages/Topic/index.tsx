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
      {topic && (
        <>
          <h1>{topic.title}</h1>
          <S.Description>{topic.description}</S.Description>
          <S.SessionInfo>
            <h2>Sessão de Votação</h2>
            {topic.session && (
              <>
                <ul>
                  <li>
                    <b>Status da sessão: </b>
                    {topic.session.isOpen ? 'Aberta' : 'Fechada'}
                  </li>
                  <li>
                    <b>Duração: </b>
                    {formatMinutesToHour(topic.session.duration)}
                  </li>
                  <li>
                    <b>Horário de abertura: </b>
                    {formatDate(topic.session.started_at)}
                  </li>
                  {topic.session.finished_at && (
                    <li>
                      <b>Horário de fechamento: </b>
                      {formatDate(topic.session.finished_at)}
                    </li>
                  )}
                </ul>
                {!topic.session.finished_at && (
                  <span>Resultado será mostrado ao final da sessão.</span>
                )}
                {!topic.session.isOpen && (
                  <>
                    <h3>Resultado da Votação</h3>
                    <ul>
                      <li>
                        <b>Total de votos: </b>
                        {topic.session.totalVotes}
                      </li>
                      <li>
                        <b>Votos sim: </b>
                        {topic.session.positiveVotes}
                      </li>
                      <li>
                        <b>Votos não: </b>
                        {topic.session.negativeVotes}
                      </li>
                    </ul>
                  </>
                )}

                {topic.session.isOpen && (
                  <Button onClick={handleModal} type="button" variant="primary">
                    Votar
                  </Button>
                )}
              </>
            )}

            {!topic.session && (
              <>
                <h3 style={{ color: 'var(--danger)' }}>
                  Nenhuma sessão foi aberta para está pauta.
                </h3>
                <Button type="button" onClick={handleModal} variant="primary">
                  Abrir Sessão
                </Button>
              </>
            )}
          </S.SessionInfo>
        </>
      )}
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
