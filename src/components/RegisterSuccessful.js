import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class RegisterSuccessful extends Component {
  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
      return true;
  }
  
  render() {
    return (
      <Card>
      <CardSection>
        <Text>You're now registered.</Text>
      </CardSection>
      
      <CardSection>
          <TouchableHighlight onPress={() => Actions.reset('auth')}>
            <Text>You can now log in</Text>
          </TouchableHighlight>
        </CardSection>
        
      </Card>
    );
  }
}


export default connect(null)(RegisterSuccessful);
