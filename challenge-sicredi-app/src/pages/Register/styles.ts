import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 50%;
  transform: translateY(30%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 40px;
  margin-top: 40px;

  button {
    background-color: var(--primary);
    color: var(--white);
    font-size: 20px;
    width: 100%;

    &:hover {
      background-color: #2a3147;
    }
  }
`;

export const SuccessOnSubmit = styled.span`
  text-align: center;
  color: var(--success);
`;

export const ErrorOnSubmit = styled.span`
  text-align: center;
  color: var(--danger);
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label``;
