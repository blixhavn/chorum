import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { approveApplicant, removeMember } from '../../actions';
import { CardSection, Confirm } from '../../../../components';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
})



class ApplicantItem extends Component {

    state = {
        showModal: false
    };

    onRowPress = () => {
        this.setState({ showModal: true });
    }

    onApproveApplicant = () => {
        this.props.approveApplicant(this.props.applicant);
        this.setState({ showModal: false })
    }

    onDeclineApplicant = () => {
        this.props.removeMember(this.props.applicant);
        this.setState({ showModal: false })
    }

    render() {
        const { name } = this.props.applicant;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.title}>
                            { name }
                        </Text>
                    </CardSection>
                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onApproveApplicant}
                        onDecline={this.onDeclineApplicant}
                    >
                        Do you want to accept this applicant?
                    </Confirm>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default connect(null, { approveApplicant, removeMember })(ApplicantItem);
