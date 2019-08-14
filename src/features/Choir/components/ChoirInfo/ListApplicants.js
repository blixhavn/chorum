import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Spinner } from '../../../../components';
import { choirFetchApplicants } from '../../actions';
import { colors } from '../../../../api/constants';
import ApplicantItem from './ApplicantItem';

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
                        <Text style={{fontSize: 20}}>Pending applicants</Text>
                    </CardSection>
                    <FlatList
                        data={applicants}
                        renderItem={({ item }) => <ApplicantItem applicant={item} />}
                        keyExtractor={item => item.uid}
                    />
                </Card>
            );
        }
        return null;
    }
}

  
const mapStateToProps = ({ choirApplicants, auth }) => {
    const applicants = _.map(choirApplicants.applicants, (val, uid) => {
      return { ...val, uid };
    });
    choirApplicants.applicants = applicants;
  
    return { choirApplicants, auth };
  }

export default connect(mapStateToProps, { choirFetchApplicants })(ListApplicants);
  