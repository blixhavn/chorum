import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { LoginForm } from '../LoginForm';

describe("LoginForm Component", () => {
    const props = {
      emailChanged: jest.fn(),
      passwordChanged: jest.fn(),
      loginUser: jest.fn(),
      email: 'test@email.com',
      password: 'password',
      error: '',
      loading: false
    }

    it("renders correctly", () => {
      const loginForm = renderer.create(<LoginForm {...props} />).toJSON();
      expect(loginForm).toMatchSnapshot();
    });
});
