import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  ...props
}) => {
  return (
    <S.Button onClick={onClick} {...props} variant={variant}>
      {children}
    </S.Button>
  );
};

export default Button;
