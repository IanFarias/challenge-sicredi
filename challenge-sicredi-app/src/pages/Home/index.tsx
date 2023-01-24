import { useState } from 'react';
import Modal from '../../components/Modal';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <main>
      <h1>Hello world</h1>
      <button onClick={handleModal}>open modal</button>
      <Modal onRequestClose={handleModal} isOpen={openModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        asperiores magni eos ducimus quae quasi officiis at dolorem perferendis
        praesentium eveniet, recusandae, soluta quod sint? Laboriosam quibusdam
        minus ullam vero.
      </Modal>
    </main>
  );
};

export default Home;
