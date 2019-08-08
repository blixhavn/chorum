import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from './constants';

const Button2 = (props) => {
  const { buttonStyle, textStyle } = styles;
  const { onPress, children } = props;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: colors.grey,
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: colors.green,
    borderWidth: 0,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
};

export { Button2 };
