import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { NewsDisplay } from '../../src/components/NewsDisplay';

describe("NewsDisplay Component", () => {
    it("renders correctly", () => {
      const loginForm = renderer.create(<NewsDisplay />).toJSON();
      expect(loginForm).toMatchSnapshot();
    });
});
