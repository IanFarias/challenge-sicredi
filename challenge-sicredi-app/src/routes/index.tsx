import { Routes as Switch, Route } from 'react-router-dom';
import { SCREEN_PATHS } from '../constants/paths';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Topic from '../pages/Topic';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREEN_PATHS.home} element={<Home />} />
      <Route path={SCREEN_PATHS.register} element={<Register />} />
      <Route path={SCREEN_PATHS.topic} element={<Topic />} />
    </Switch>
  );
};

export default Routes;
