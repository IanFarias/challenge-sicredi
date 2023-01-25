import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  justify-content: center;
  background: #f0e7e7;
  display: flex;
  height: 80px;
  margin-bottom: 40px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 50px;

    a {
      color: var(--primary);
      height: 44px;
      display: inline-flex;
      align-items: center;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        color: currentColor;
      }
    }
  }
`;
