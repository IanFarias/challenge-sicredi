import { useEffect, useState } from 'react';
import Button from '../../components/baseComponents/Button';
import Modal from '../../components/Modal';
import { TopicResponse } from '../../interfaces/topic.interface';
import { useChallengeApi } from '../../services/api/useChallengeApi';
import CardTopic from './components/CardTopic';
import * as S from './styles';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [topics, setTopics] = useState<null | TopicResponse[]>(null);

  const { listTopics } = useChallengeApi();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const getTopics = async () => {
      const response = await listTopics();

      setTopics(response);
    };

    getTopics();
  }, []);

  return (
    <S.Container>
      <h1>Assembleia Virtual</h1>
      <Button type="button" onClick={handleModal}>
        Criar nova pauta
      </Button>

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

      <Modal onRequestClose={handleModal} isOpen={openModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        asperiores magni eos ducimus quae quasi officiis at dolorem perferendis
        praesentium eveniet, recusandae, soluta quod sint? Laboriosam quibusdam
        minus ullam vero.
      </Modal>
    </S.Container>
  );
};

export default Home;
