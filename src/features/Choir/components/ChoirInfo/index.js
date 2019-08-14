import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Spinner } from '../../../../components';
import { colors } from '../../../../api/constants';
import { choirInfoFetch } from '../../actions';
import ListApplicants from './ListApplicants';
import ListMembers from './ListMembers';

export class ChoirInfo extends Component {

  componentDidMount() {
    this.props.choirInfoFetch(this.props.auth.user);
  }

  displayInfo() {
    const { name, accessCode, email, website, loading, error } = this.props.choirInfo;

    if (loading) {
      return (
        <Card>
            <CardSection>
                <Spinner size='large' color={colors.purple} style={{padding: 20}} />
            </CardSection>
        </Card>
      )
    }
    return (
      <Card>
        <CardSection>
          <Text style={{fontSize: 20}}>{name}</Text>
        </CardSection>
        <CardSection>
          <Text style={{fontSize: 18}}>Access code: {accessCode}</Text>
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


  render() {
    return (
      <View>
        {this.displayInfo()}
        <ListApplicants />
        <ListMembers />
      </View>
    )
  }
}

const mapStateToProps = ({ choirInfo, auth }) => {

  return { choirInfo, auth };
}

export default connect(mapStateToProps, { choirInfoFetch })(ChoirInfo);
