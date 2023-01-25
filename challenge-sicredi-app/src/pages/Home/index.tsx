import { useState } from 'react';
import Modal from '../../components/Modal';
import * as S from './styles';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <S.Container>
      <h1>Hello world</h1>
      <button onClick={handleModal}>open modal</button>
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
