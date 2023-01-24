import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  value?: string | number;
  width?: number;
  height?: number;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = 'text',
      width,
      height,
      readOnly = false,
      ...props
    }: InputProps,
    ref
  ) => {
    return (
      <S.Container width={width} height={height} readonly={readOnly}>
        <S.Input id={id} type={type} {...props} readOnly={readOnly} ref={ref} />
      </S.Container>
    );
  }
);

export default Input;
