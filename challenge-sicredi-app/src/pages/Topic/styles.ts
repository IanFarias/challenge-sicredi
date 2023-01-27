import styled from 'styled-components';

export const Container = styled.main`
  max-width: 40%;
  margin: 0 auto;
`;

export const Description = styled.p`
  margin-top: 20px;
`;

export const SessionInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  button {
    font-size: 18px;
    max-width: 200px;
    color: var(--white);

    &:hover {
      background-color: var(--dark-primary);
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;
