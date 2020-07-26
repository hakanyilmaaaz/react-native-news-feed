import React, {Component} from 'react';
import {Provider} from 'react-redux';
import reducers from './redux/index';
import {Routers} from './config/routes';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={reducers()}>
        <Routers />
      </Provider>
    );
  }
}
