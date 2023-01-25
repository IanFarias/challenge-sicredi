import { Routes as Switch, Route } from 'react-router-dom';
import { SCREEN_PATHS } from '../constants/paths';

import Home from '../pages/Home';
import Register from '../pages/Register';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREEN_PATHS.home} element={<Home />} />
      <Route path={SCREEN_PATHS.register} element={<Register />} />
    </Switch>
  );
};

export default Routes;
