import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { faNewspaper , faMusic, faUsers } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './features/Auth/components/LoginForm';
import RegisterForm from './features/Auth/components/RegisterForm';
import RegisterSuccessful from './features/Auth/components/RegisterSuccessful';
import NewsDisplay from './features/News/components/NewsDisplay';
import SongList from './features/Songs/components/SongList';
import SongForm from './features/Songs/components/SongForm';
import ChoirInfo from './features/Choir/components/ChoirInfo';
import ChoirJoinOrCreate from './features/Choir/components/JoinOrCreate';
import ChoirCreate from './features/Choir/components/ChoirCreate';
import ChoirApplicationPending from './features/Choir/components/ApplicationPending';
import { colors } from './api/constants';
import { TabIcon } from './components';

const sceneStyle = {
  backgroundColor: colors.purple,
}

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
            <Scene key="choirSettings" showLabel={false} icon={TabIcon(faUsers)}>
              <Scene key="choirInfo" component={ChoirInfo} title="Your choir" initial={this.props.hasChoir && this.props.isApprovedInChoir}/>
              <Scene key="choirJoinOrCreate" component={ChoirJoinOrCreate} title="Your choir" initial={!this.props.hasChoir} />
              <Scene key="choirCreate" component={ChoirCreate} title="Create new choir" />
              <Scene key="choirApplicationPending" component={ChoirApplicationPending} title="Your choir" initial={this.props.hasChoir && !this.props.isApprovedInChoir}/>
            </Scene>
            <Scene key="songs" showLabel={false} icon={TabIcon(faMusic)}>
              <Scene key="songList" component={SongList} title="Songs" onRight={() => Actions.addSong()} rightTitle="Add"/>
              <Scene key="addSong" component={SongForm} title="Add song" />
              <Scene key="editSong" component={SongForm} title="Edit song" />
            </Scene>
          </Scene>
          <Scene key="auth" initial={!this.props.loggedIn}>
            <Scene key="login" component={LoginForm} hideNavBar={true} initial/>
            <Scene key="register" component={RegisterForm} hideNavBar={true} />
            <Scene key="registerSuccessful" component={RegisterSuccessful} title="Registation Successful"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
};

const mapStateToProps = ({ auth }) => {
  const loggedIn = auth.user !== null;
  const hasChoir = _.get(auth, 'user.profile.choirID') !== undefined;
  const isApprovedInChoir =_.get(auth, 'user.profile.choirApproved') || false;

  return { loggedIn, hasChoir, isApprovedInChoir };
};

export default connect(mapStateToProps)(RouterComponent);
