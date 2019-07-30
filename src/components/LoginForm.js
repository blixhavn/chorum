import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Spinner } from './common';
import { colors } from './common/constants';

export class LoginForm extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Image
          source={require('../img/chorum-splash.png')}
          style={styles.image}
        />
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <View style={styles.loginField}>
          <FontAwesomeIcon style={styles.inputIcon} icon={faAt} />
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder="your@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            keyboardType="email-address"
            autoCompleteType="email"
            textContentType="emailAddress"
          />
        </View>

        <View style={styles.loginField}>
          <FontAwesomeIcon style={styles.inputIcon} icon={faKey} />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="**********"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            textContentType="password"
            autoCompleteType="password"
          />
        </View>

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
      <Button
        buttonStyle={styles.loginButton}
        textStyle={styles.loginButtonText}
        onPress={this.onButtonPress.bind(this)}
      >
        Login
      </Button>
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
    padding: 15
  },
  inputIcon: {
    color: 'grey',
    padding: 10,
    paddingRight: 20,
    alignSelf: 'center'
  },
  loginButton: {
    flex: null,
    borderRadius: 10,
    backgroundColor: colors.green,
    borderWidth: 0,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: colors.grey,
    fontSize: 18,
    fontWeight: '600'
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
  },
  smallCard: {
    paddingLeft: 30,
    paddingRight: 30
  }
})


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
