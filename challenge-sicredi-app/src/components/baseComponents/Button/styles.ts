import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger' | 'iconButton';
}

const button_variants = {
  primary: () => css`
    font-size: 16px;
    color: var(--white);
    background-color: var(--primary);

    :hover {
      background-color: var(--dark-primary);
    }
  `,
  secondary: () => css`
    font-size: 16px;
    color: var(--white);
    background-color: var(--success);

    :hover {
      background-color: var(--dark-success);
    }
  `,
  danger: () => css`
    font-size: 16px;
    color: var(--white);
    background-color: var(--danger);

    :hover {
      background-color: var(--dark-danger);
    }
  `,
  iconButton: () => css`
    background-color: transparent;
  `,
};

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  min-height: 48px;
  padding: 0 1.5rem;

  ${({ variant }) => button_variants[variant]}
`;
