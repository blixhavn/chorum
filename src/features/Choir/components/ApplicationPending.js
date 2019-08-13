import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../../../components';

export class ApplicationPending extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Choir Application Pending</Text>
        </CardSection>
        {/* <CardSection>
          <Text>Registration code: {regCode}</Text>
        </CardSection>
        <CardSection>
          <Text>Email: {email}</Text>
        </CardSection>
        <CardSection>
          <Text>Website: {website}</Text>
        </CardSection>
        <CardSection>
          <Text>Phone: {phone}}</Text>
        </CardSection> */}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  // const { regCode, email, website, phone } = state.choirSettings;
  // return { regCode, email, website, phone };
  return {};
}

export default connect(mapStateToProps)(ApplicationPending);
