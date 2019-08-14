import React, { Component } from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen'
import reducers from './reducers';
import Router from './Router';
import { firebaseConfig } from './config'

YellowBox.ignoreWarnings(['Warning: componentWill', 'Setting a timer']);


class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);

    SplashScreen.hide();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <StatusBar
          backgroundColor="#5c2569"
          barStyle="light-content"
        />
        <Router style={{ backgroundColor: '#5c2569' }}/>
      </Provider>
    );
  }
}

export default App;
