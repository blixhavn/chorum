import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChoirForm from './ChoirForm';
import { choirUpdate, choirSave } from '../actions';
import { Card, CardSection, Button } from '../../../components';

class ChoirEdit extends Component {
    state = {
        showModal: false
    };

    componentDidMount() {
        _.each(this.props.choir, (value, prop) => {
            this.props.choirUpdate({ prop, value });
        });
    }

    onButtonPress = () => {
        const { name, website, email, uid } = this.props;
        this.props.choirSave({ name, website, email, uid });
    }
    
    render() {
        return (
            <Card>
                <ChoirForm />
                <CardSection>
                     <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, website, email, uid } = state.choirForm;

    return { name, website, email, uid };
}

export default connect(mapStateToProps, { choirUpdate, choirSave })(ChoirEdit);
