import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  background-color: var(--card-bg);

  h2 {
    margin-bottom: 5px;
  }
`;
