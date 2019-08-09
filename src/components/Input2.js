import React from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../api/constants';

const Input2 = (props) => {
  return (

    <View style={styles.loginField}>
      <FontAwesomeIcon style={styles.inputIcon} icon={props.icon} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = {
  
  loginField: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 15,
    lineHeight: 23
  },
  inputIcon: {
    color: 'grey',
    padding: 10,
    paddingRight: 20,
    alignSelf: 'center'
  }
};

export { Input2 };
