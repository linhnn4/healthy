import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import ColumnPage from 'containers/ColumnPage/Loadable';
import TopPage from 'containers/TopPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import MyRecordPage from 'containers/MyRecordPage/Loadable';
import LoadingIndicator from 'components/LoadingIndicator';

import { COOKIE_NAME } from 'utils/constants';
import cookie from 'react-cookies';
import { userAction } from 'actions/user';

import 'antd/dist/antd.css';

import GlobalStyle from '../../global-styles';
import PrivateRoute from './PrivateRoute';

export default function App() {
  const [isReadyUser, setIsReadyUser] = React.useState(false);

  const loadUser = React.useCallback(async () => {
    try {
      const profile = cookie.load(COOKIE_NAME);
      if (profile) {
        await userAction.signIn(profile);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsReadyUser(true);
    }
  }, []);

  React.useEffect(() => {
    loadUser();
  }, []);

  if (!isReadyUser) {
    return <LoadingIndicator />;
  }
  return (
    <div className="main">
      <Helmet defaultTitle="Healthy">
        <meta name="description" content="Healthy" />
      </Helmet>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/top" component={TopPage} />
        <PrivateRoute path="/my-record" component={MyRecordPage} />
        <Route path="" component={ColumnPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
