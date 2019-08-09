import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { faAt, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { regNameChanged, regEmailChanged, regPasswordChanged, registerUser } from '../actions';
import { Input2, Button2, Spinner } from '../../../components';
import { colors } from '../../../api/constants';

export class RegisterForm extends Component {
  onNameChange(text) {
    this.props.regNameChanged(text);
  }

  onEmailChange(text) {
    this.props.regEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.regPasswordChanged(text);
  }

  onButtonPress() {
    const { name, email, password } = this.props;

    this.props.registerUser({ name, email, password });
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

  renderErrorMessage() {
    if(this.props.error) {
      return (
        <Text style={styles.errorTextStyle}>
          {this.props.error.message}
        </Text>
      )
    }
  }

  render() {
    return (
      <View style={styles.body}>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Create new account
          </Text>
        </View>

        {this.renderErrorMessage()}

          <Input2
            icon={faUser}
            autoCapitalize='none'
            placeholder="Your name"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />

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

          <TouchableHighlight  style={styles.bottomLink} onPress={() => { Actions.pop() }}>
            <Text style={styles.goBackLink}>Or, log in with an existing account</Text>
          </TouchableHighlight>
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
  }, 
  headerContainer: {
    height: 300,
    padding: 30,
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'sans-serif-light',
    fontSize: 26,
    fontWeight: "100",
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center'
  }, 
  bottomLink: {
    alignContent: 'center',
    paddingBottom: 15
  },
  goBackLink: {
    fontSize: 18,
    alignSelf: 'center',
    color: colors.white,
  },
})

const mapStateToProps = ({ register }) => {
  const { name, email, password, error, loading } = register;

  return { name, email, password, error, loading };
};

export default connect(mapStateToProps, {
  regNameChanged, regEmailChanged, regPasswordChanged, registerUser
})(RegisterForm);
