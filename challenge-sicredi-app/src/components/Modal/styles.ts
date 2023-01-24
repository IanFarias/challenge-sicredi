import styled from 'styled-components';

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  button.modal-close-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    align-self: flex-end;

    font-size: 24px;

    height: 48px;
    width: 48px;
  }
`;
