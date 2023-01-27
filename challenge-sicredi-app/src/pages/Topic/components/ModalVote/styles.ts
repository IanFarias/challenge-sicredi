import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px 50px;
  gap: 50px;
`;

export const Label = styled.label``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  input[type='text'] {
    width: 200px;
  }

  fieldset {
    display: flex;
    justify-content: space-between;
    border: none;

    legend {
      margin-bottom: 10px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    padding: 0 80px;
    color: var(--white);
    font-size: 24px;
    background-color: var(--danger);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
