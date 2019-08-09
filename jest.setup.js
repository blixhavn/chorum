import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockFirebase from 'firebase-mock'

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
  
  var mockauth = new MockFirebase.MockAuthentication();
  var mockdatabase = new MockFirebase.MockFirebase();
  var mockstorage = new MockFirebase.MockStorage();
  var mockmessaging = new MockFirebase.MockMessaging(); 
  mockdatabase.autoFlush(1);
  mockauth.autoFlush(1);
  var mocksdk = new MockFirebase.MockFirebaseSdk(
    // use null if your code does not use RTDB
    (path) => {
      return path ? mockdatabase.child(path) : mockdatabase;
    },
    // use null if your code does not use AUTHENTICATION
    () => {
      mockauth.signInWithEmailAndPassword = jest.fn().mockResolvedValue({
        user: {
          uid: 123123
        }
      });
      mockauth.createUserWithEmailAndPassword = jest.fn().mockResolvedValue({
        user: {
          uid: 123123
        }
      })
      return mockauth;
    },
    // use null if your code does not use FIRESTORE
    () => {
      return null;
    },
    // use null if your code does not use STORAGE
    () => {
      return mockstorage;
    },
    // use null if your code does not use MESSAGING
    () => {
      return mockmessaging;
    }
  );
  const firebase = mocksdk.initializeApp();


  return firebase;
});


