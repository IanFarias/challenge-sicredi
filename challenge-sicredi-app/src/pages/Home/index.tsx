import { useEffect, useState } from 'react';
import Button from '../../components/baseComponents/Button';
import Modal from '../../components/Modal';
import { ITopicSimplified } from '../../interfaces/topic.interface';
import { useChallengeApi } from '../../services/api/useChallengeApi';
import CardTopic from './components/CardTopic';
import ModalTopic from './components/ModalTopic';
import * as S from './styles';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [topics, setTopics] = useState<null | ITopicSimplified[]>(null);

  const { listTopics } = useChallengeApi();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const getTopics = async () => {
    try {
      const response = await listTopics();

      setTopics(response);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
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
      {!topics?.length && !error && (
        <h2 style={{ textAlign: 'center' }} role="alert">
          Nenhuma pauta encontrada...
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
                isFinished={topic.isFinished}
              />
            );
          })}
      </S.CardListContainer>

      <Modal onRequestClose={handleModal} isOpen={openModal} maxWidth={'40%'}>
        <ModalTopic onUpdate={getTopics} closeModal={handleModal} />
      </Modal>
    </S.Container>
  );
};

export default Home;
