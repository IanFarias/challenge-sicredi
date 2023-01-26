import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) => `var(--${variant})` || 'none'};
  border: none;
  border-radius: 4px;
  min-height: 48px;
  padding: 0 1.5rem;
`;
