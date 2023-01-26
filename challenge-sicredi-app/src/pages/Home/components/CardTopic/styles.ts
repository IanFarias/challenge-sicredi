import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  background-color: var(--card-bg);
  box-shadow: 0px 3px 4px #cccccc;

  div {
    max-width: 80%;
  }

  h2 {
    margin-bottom: 5px;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  a {
    position: relative;
    color: var(--white);
    text-decoration: none;
    background-color: var(--primary);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  a:hover {
    text-decoration: underline;
  }

  span.arrow {
    width: 12px;
    height: 12px;
    margin-left: 10px;
    box-shadow: -2px -2px 0 1px var(--white) inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(314deg);
  }
`;
