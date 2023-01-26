import { useEffect, useState } from 'react';
import Button from '../../components/baseComponents/Button';
import Modal from '../../components/Modal';
import { TopicResponse } from '../../interfaces/topic.interface';
import { useChallengeApi } from '../../services/api/useChallengeApi';
import CardTopic from './components/CardTopic';
import ModalTopic from './components/ModalTopic';
import * as S from './styles';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [topics, setTopics] = useState<null | TopicResponse[]>(null);

  const { listTopics } = useChallengeApi();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const getTopics = async () => {
      try {
        const response = await listTopics();

        setTopics(response);
      } catch (error) {
        setError(true);
      }
    };

    getTopics();
  }, []);

  return (
    <S.Container>
      <h1>Assembleia Virtual</h1>
      <Button type="button" onClick={handleModal}>
        Criar nova pauta
      </Button>
      {error && (
        <h2 style={{ textAlign: 'center' }} role="alert">
          Erro ao carregar as pautas...
        </h2>
      )}
      <S.CardListContainer>
        {topics &&
          topics.map((topic) => {
            return (
              <CardTopic
                key={topic.id}
                id={topic.id}
                title={topic.title}
                description={topic.description}
              />
            );
          })}
      </S.CardListContainer>

      <Modal onRequestClose={handleModal} isOpen={openModal} maxWidth={'40%'}>
        <ModalTopic />
      </Modal>
    </S.Container>
  );
};

export default Home;
