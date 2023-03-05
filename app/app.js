/* eslint-disable global-require */
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'reducers';
import { Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/logo.png';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

// Create redux store with history
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <App />
        </Router>
      </QueryClientProvider>
    </ReduxProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
require('offline-plugin/runtime').install(); // eslint-disable-line global-require
