import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const Label = styled.label``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  button {
    color: var(--white);
    font-size: 16px;
    background-color: var(--success);
  }
`;
