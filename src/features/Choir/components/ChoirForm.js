import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { choirUpdate } from '../actions';
import { CardSection, Input } from '../../../components';

class ChoirForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Chorum"
            value={this.props.name}
            onChangeText={value => this.props.choirUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Website"
            placeholder="chorum.app"
            value={this.props.website}
            onChangeText={value => this.props.choirUpdate({ prop: 'website', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="hey@chorum.app"
            value={this.props.email}
            onChangeText={value => this.props.choirUpdate({ prop: 'email', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, website, email } = state.choirForm;

  return { name, website, email };
};

export default connect(mapStateToProps, { choirUpdate })(ChoirForm);
