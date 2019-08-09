import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../../../components';

export class NewsDisplay extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Text>News goes here. Soon. Very soon. Sooooon</Text>
        </CardSection>
      </Card>
    );
  }
}

export const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}


export default connect(null)(NewsDisplay);
