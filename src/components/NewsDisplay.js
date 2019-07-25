import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class NewsDisplay extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Text>News goes here. Soon.</Text>
        </CardSection>
      </Card>
    );
  }
}


export default connect(null)(NewsDisplay);
