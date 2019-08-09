import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Spinner, Input2, Button2 } from '../../../components';
import { colors } from '../../../api/constants';

export class LoginForm extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Image
          source={require('../../../assets/img/chorum-splash.png')}
          style={styles.image}
        />
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

        <TouchableHighlight  style={styles.bottomLink} onPress={() => { Actions.register() }}>
          <Text style={styles.registerText}>Register new account</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onRegisterLinkPress() {
    Action
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner style={{ flex: null, padding: 23 }} size="large" color={colors.green} />;
    }

    return (
      <Button2
        onPress={this.onButtonPress.bind(this)}
      >
        Login
      </Button2>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.purple,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  bottomLink: {
    alignContent: 'center',
    paddingBottom: 15
  },
  registerText: {
    fontSize: 18,
    alignSelf: 'center',
    color: colors.white,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  }
})


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
