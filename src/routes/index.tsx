import { Redirect, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Download from '../pages/Download';
import NotFoundPage from '../pages/NotFoundPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/download" component={Download} />
    <Route path="/404" component={NotFoundPage} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;