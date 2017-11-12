import './style/style.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import TeacherList from './components/TeacherList';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={TeacherList} />
          </Route>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
