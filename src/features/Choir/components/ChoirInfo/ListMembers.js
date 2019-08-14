import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Spinner } from '../../../../components';
import { choirFetchApplicants } from '../../actions';
import { colors } from '../../../../api/constants';
import MemberItem from './MemberItem';

class ListApplicants extends Component {

    componentDidMount() {
        this.props.choirFetchApplicants(this.props.auth.user);
    }

    render() {
        const { applicants, loading, error } = this.props.choirApplicants;

        if (error) {
            return (
                <Card>
                    <CardSection>
                        {error}
                    </CardSection>
                </Card>
            );
        } else if (loading) {
            return (
                <Card>
                    <CardSection>
                        <Spinner size='large' color={colors.purple} style={{padding: 20}}  />
                    </CardSection>
                </Card>
            );
        } else if (applicants.length > 0) {
            return (
                <Card>
                    <CardSection>
                        <Text style={{fontSize: 20}}>Members</Text>
                    </CardSection>
                    <FlatList
                        data={applicants}
                        renderItem={({ item }) => <MemberItem member={item} />}
                        keyExtractor={item => item.uid}
                    />
                </Card>
            );
        }
        return null;
    }
}

  
const mapStateToProps = ({ choirInfo, auth }) => {
    const members = _.map(choirInfo.members, (val, uid) => {
      return { ...val, uid };
    });
    choirInfo.members = members;
  
    return { choirInfo, auth };
  }

export default connect(mapStateToProps, { choirFetchApplicants })(ListApplicants);
  