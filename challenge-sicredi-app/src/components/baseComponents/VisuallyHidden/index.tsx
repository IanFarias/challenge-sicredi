import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const VisuallyHidden: React.FC<Props> = ({ children }: Props) => {
  return <S.HiddenContent>{children}</S.HiddenContent>;
};

export default VisuallyHidden;
