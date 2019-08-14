import React, { Component } from 'react';
import { connect } from 'react-redux';
import { choirCreate } from '../actions';
import { Card, CardSection, Button, Spinner } from './../../../components';
import { colors } from './../../../api/constants'
import ChoirForm from './ChoirForm';

class ChoirCreate extends Component {
  onButtonPress() {
    const { name, website, email } = this.props;

    this.props.choirCreate(this.props.user, { name, website, email});
  }

  showButton() {
    if (this.props.loading) {
      return <Spinner size="large" color={colors.green} />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create new choir
      </Button>
    )
  }

  showError() {
    if (this.props.error) {
      return <Text style={{color: 'red', fontSize: 18}}>{this.props.error}</Text>
    }
  }

  render() {
    return (
      <Card>
        <ChoirForm {...this.props} />
        <CardSection>
          {this.showButton()}
        </CardSection>
        {this.showError()}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, website, email, loading, error } = state.choirForm;
  const { user } = state.auth;
  return { user, name, website, email, loading, error };
};

export default connect(mapStateToProps, {
  choirCreate
})(ChoirCreate);
