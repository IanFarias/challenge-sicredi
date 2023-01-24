import styled from 'styled-components';

interface ContainerProps {
  width?: number;
  height?: number;
  readonly?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width || 200}px;
  height: ${({ height }) => height || 40}px;

  display: flex;
  align-items: center;
  position: relative;

  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid var(--color-text);

  &:focus-within {
    box-shadow: #fff 0px 0px 0px 2px, #575757 0px 0px 0px 4px;
  }

  background-color: ${({ readonly }) => (readonly ? '#dfdfdf' : '#fbfbfb')};
`;

export const Input = styled.input`
  border: none;
  outline: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
`;
