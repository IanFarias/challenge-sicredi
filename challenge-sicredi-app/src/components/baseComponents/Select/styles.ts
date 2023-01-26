import styled from 'styled-components';

interface SelectProps {
  width?: number;
  height?: number;
  readonly?: boolean;
}

export const Select = styled.select<SelectProps>`
  display: flex;

  width: ${({ width }) => width || 200}px;
  height: ${({ height }) => height || 40}px;

  border-radius: 5px;
  outline: 0;
  padding: 0 10px;

  &:focus-visible {
    box-shadow: #fff 0px 0px 0px 2px, #575757 0px 0px 0px 4px;
  }

  background-color: ${({ disabled }) => (disabled ? '#dfdfdf' : '#fbfbfb')};
`;
