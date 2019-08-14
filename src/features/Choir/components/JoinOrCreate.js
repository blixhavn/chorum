import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { accessCodeChanged, joinChoir } from '../actions';
import { Input2, Button2 } from '../../../components'
import { colors } from '../../../api/constants'

export class JoinOrCreate extends Component {

  onAccessCodeChange = (text) => {
    this.props.accessCodeChanged(text);
  }

  joinChoir = () => {
    const { user, accessCode } = this.props;

    this.props.joinChoir(user, accessCode);
  }

  renderError = () => {
    if (this.props.error)
      return <Text style={styles.errorTextStyle}>{this.props.error}</Text>
  }

  render() {
    return (
      <View style={styles.body}>
          <Button2 onPress={Actions.choirCreate}>Create new choir</Button2>


        <View style={styles.area}>
          <Text>Or, enter an access code to join an existing choir</Text>
          {this.renderError()}
          <Input2
            icon={faKey}
            autoCapitalize='none'
            placeholder=""
            onChangeText={this.onAccessCodeChange}
            value={this.props.accessCode}
          />
          <Button2 onPress={this.joinChoir}>Join choir</Button2>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  area: {
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignContent: 'center'
  },
});

const mapStateToProps = (state) => {
  const { accessCode } = state.choirJoinForm;
  const { user } = state.auth;
  return { accessCode, user };
}

export default connect(mapStateToProps, { accessCodeChanged, joinChoir })(JoinOrCreate);
