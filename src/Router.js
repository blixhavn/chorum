import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { faNewspaper , faMusic } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import RegisterSuccessful from './components/RegisterSuccessful';
import NewsDisplay from './components/NewsDisplay';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import { colors } from './components/common/constants';
import { TabIcon } from './components/common';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene
            key="main"
            initial={this.props.loggedIn}
            tabs
            tabBarStyle={{backgroundColor: colors.purple}}
            showLabel={false}
          >
            <Scene key="newsDisplay" component={NewsDisplay} title="News" showLabel={false} icon={TabIcon(faNewspaper)}/>
            <Scene key="songs" showLabel={false} icon={TabIcon(faMusic)}>
              <Scene key="songList" component={SongList} title="Songs" onRight={() => Actions.addSong()} rightTitle="Add"/>
              <Scene key="addSong" component={SongForm} title="Add song" />
              <Scene key="editSong" component={SongForm} title="Edit song" />
            </Scene>
          </Scene>
          <Scene key="auth" initial={!this.props.loggedIn}>
            <Scene key="login" component={LoginForm} hideNavBar={true}/>
            <Scene key="register" component={RegisterForm} title="Register" />
            <Scene key="registerSuccessful" component={RegisterSuccessful} title="Registation Successful"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
};

const mapStateToProps = ({ auth }) => {
  const loggedIn = auth.user !== null;

  return { loggedIn };
};

export default connect(mapStateToProps)(RouterComponent);
