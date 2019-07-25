import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import MockFirebase from 'firebase-mock'

// Configure adapter here, so we don't need to do it in each test
configure({ adapter: new Adapter() });

jest.mock('react-native-router-flux', () => {
    const actions = () => {
        const mockedComponent = ({ children }) => (
          <div>{children}</div>
        );
        mockedComponent.displayName = 'Actions';
        mockedComponent.reset = jest.fn();
        mockedComponent.registerSuccessful = jest.fn();
        return mockedComponent;
      }

    return {
        Actions: actions()
    };
})

jest.mock('firebase', () => {
  return {
    auth: function ()  {
      return {
        signInWithEmailAndPassword: jest.fn().mockResolvedValue(),
        createUserWithEmailAndPassword: jest.fn().mockResolvedValue()
      }
    }
  }
});

