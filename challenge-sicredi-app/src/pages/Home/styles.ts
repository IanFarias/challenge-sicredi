import styled from 'styled-components';

export const Container = styled.main`
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  button {
    align-self: flex-start;
  }
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;
