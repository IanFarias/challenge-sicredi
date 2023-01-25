import { Link } from 'react-router-dom';
import { SCREEN_PATHS } from '../../constants/paths';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Nav>
        <ul>
          <li>
            <Link to={SCREEN_PATHS.home}>Página Inicial</Link>
          </li>
          <li>
            <Link to={SCREEN_PATHS.register}>Cadastrar Associado</Link>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
