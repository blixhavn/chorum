import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';
import { regEmailChanged, regPasswordChanged, registerUser } from '../actions';
import { Card, CardSection, Input2, Button2, Spinner } from './common';
import { colors } from './common/constants';

export class RegisterForm extends Component {
  onEmailChange(text) {
    this.props.regEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.regPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.registerUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button2
        onPress={this.onButtonPress.bind(this)}
      >
        Register
      </Button2>
    );
  }

  render() {
    return (
      <View style={styles.body}>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <Input2
          icon={faAt}
          autoCapitalize='none'
          placeholder="your@email.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="emailAddress"
        />

        <Input2
          icon={faKey}
          secureTextEntry
          placeholder="**********"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          textContentType="password"
          autoCompleteType="password"
        />

        {this.renderButton()}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.purple,
    justifyContent: 'flex-start'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

const mapStateToProps = ({ register }) => {
  const { email, password, error, loading } = register;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  regEmailChanged, regPasswordChanged, registerUser
})(RegisterForm);
