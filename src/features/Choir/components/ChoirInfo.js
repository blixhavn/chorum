import React, { Component } from 'react';
import _ from 'lodash';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Spinner } from '../../../components';
import { choirInfoFetch, choirFetchApplicants } from '../actions';
import { colors } from '../../../api/constants';

export class ChoirInfo extends Component {

  componentDidMount() {
    this.props.choirInfoFetch(this.props.auth.user);
    this.props.choirFetchApplicants(this.props.auth.user);
  }

  displayInfo() {
    const { name, accessCode, email, website, loading, error } = this.props.choirInfo;

    if (loading) {
      return (
        <Card>
          <Spinner size='large' color={colors.purple} />
        </Card>
      )
    }
    return (
      <Card>
        <CardSection>
          <Text style={{fontSize: 20}}>{name}</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 18}}>{accessCode}</Text>
        </CardSection>
        <CardSection>
          <Text>Email: {email}</Text>
        </CardSection>
        <CardSection>
          <Text>Website: {website}</Text>
        </CardSection>
      </Card>
    );
  }

  displayApplicants() {
    const { applicants, loading, error } = this.props.choirApplicants;

    if (loading) {
      return (
        <Card>
          <Spinner size='large' color={colors.purple} />
        </Card>
      );
    }
    return (
      <FlatList
        data={applicants}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.uid}
      />
    );
  }

  render() {
    return this.displayInfo();
  }
}

const mapStateToProps = ({ choirInfo, choirApplicants, auth }) => {
  const applicants = _.map(choirApplicants.applicants, (val, uid) => {
    return { ...val, uid };
  });
  choirApplicants.applicants = applicants;

  return { choirInfo, choirApplicants, auth };
}

export default connect(mapStateToProps, { choirInfoFetch, choirFetchApplicants })(ChoirInfo);
