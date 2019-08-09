import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { RegisterForm } from '../RegisterForm';

describe("RegisterForm Component", () => {
    const initialState = {
      regEmailChanged: jest.fn(),
      regPasswordChanged: jest.fn(),
      registerUser: jest.fn(),
      email: 'test@email.com',
      password: 'password',
      error: '',
      loading: false
    }; 

    const mockStore = configureStore();
    const store = mockStore(initialState);

    it("renders correctly", () => {
      //creates the store with any initial state or middleware needed  
      let registerForm = shallow(<RegisterForm store={store}/>);
      expect(registerForm.debug()).toMatchSnapshot();
    })

    
});