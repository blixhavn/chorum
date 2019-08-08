import React, { Component } from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen'
import reducers from './reducers';
import Router from './Router';

YellowBox.ignoreWarnings(['Warning: componentWill', 'Setting a timer']);


class App extends Component {
  componentDidMount() {
    const config = {
        apiKey: "AIzaSyCp6z1HJi_uUhDGAv85A3TVDAjzQqmYylo",
        authDomain: "chorum-4a423.firebaseapp.com",
        databaseURL: "https://chorum-4a423.firebaseio.com",
        projectId: "chorum-4a423",
        storageBucket: "chorum-4a423.appspot.com",
        messagingSenderId: "465954815245",
        appId: "1:465954815245:web:39cae87e85bc8468"
    };

    firebase.initializeApp(config);

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
