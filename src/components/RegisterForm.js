import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { regEmailChanged, regPasswordChanged, registerUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class RegisterForm extends Component {
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
      <Button onPress={this.onButtonPress.bind(this)}>
        Register
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ register }) => {
  const { email, password, error, loading } = register;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  regEmailChanged, regPasswordChanged, registerUser
})(RegisterForm);
