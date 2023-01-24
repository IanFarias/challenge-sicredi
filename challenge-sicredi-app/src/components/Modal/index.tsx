import ReactModal from 'react-modal';
import Button from '../baseComponents/Button';
import VisuallyHidden from '../baseComponents/VisuallyHidden';
import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  maxWidth?: string;
  children: React.ReactNode;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onRequestClose,
  maxWidth,
}: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        content: { maxWidth: maxWidth },
      }}
    >
      <S.ModalBody>
        <Button className="modal-close-button" onClick={onRequestClose}>
          X<VisuallyHidden>Fechar Modal</VisuallyHidden>
        </Button>
        {children}
      </S.ModalBody>
    </ReactModal>
  );
};

export default Modal;
