import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { removeMember } from '../../actions';
import { CardSection, Confirm } from '../../../../components';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
})



class MemberItem extends Component {

    state = {
        showModal: false
    };

    onRowPress = () => {
        this.setState({ showModal: true });
    }

    onRemoveMember = () => {
        this.props.removeMember(this.props.member);
        this.setState({ showModal: false })
    }

    render() {
        const { name } = this.props.member;

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
                        onAccept={this.onRemoveMember}
                        onDecline={() => this.setState({ showModal: false })}
                    >
                        Do you want to remove this member?
                    </Confirm>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default connect(null, { removeMember })(MemberItem);
