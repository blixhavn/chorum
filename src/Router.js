import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import RegisterSuccessful from './components/RegisterSuccessful';
import NewsDisplay from './components/NewsDisplay';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="main" initial={this.props.loggedIn} >
            <Scene key="newsDisplay" component={NewsDisplay} title="News"/>
          </Scene>
          <Scene key="auth" initial={!this.props.loggedIn}>
            <Scene key="login" component={LoginForm} title="Please Login"/>
            <Scene key="register" component={RegisterForm} title="Register" />
            <Scene key="registerSuccessful" component={RegisterSuccessful} title="Registation Successful"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
};

const mapStateToProps = ({ auth }) => {
  const loggedIn = auth.user !== null;

  return { loggedIn };
};

export default connect(mapStateToProps)(RouterComponent);
