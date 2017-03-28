import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import LoginViewContainer from './login/LoginViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import layoutStyles from './../styles/common';
import {getUserProfile} from '../utils/userProfile';

const defaultTabIndex = 0;

class AppView extends Component {
  constructor(props, context) {
    super(props, context);
    this.signOut = this
      .signOut
      .bind(this);
    this.signIn = this
      .signIn
      .bind(this);
  }

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    snapshotUtil
      .resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  signOut() {
    const {dispatch} = this.props;
    dispatch(SessionStateActions.clearToken());
  }

  signIn(auth, username) {
    const {dispatch} = this.props;
    dispatch(SessionStateActions.setToken(auth.Token, username));
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{
          flex: 1
        }}>
          <ActivityIndicator style={layoutStyles.centered}/>
        </View>
      );
    }
    if (!this.props.token) {
      return (
        <View style={{
          flex: 1
        }}>
          <LoginViewContainer signIn={this.signIn} />
           {__DEV__ && <DeveloperMenu/>}
        </View>
      );
    } else {
      return (
        <View style={{
          flex: 1
        }}>
          <NavigationViewContainer signOut={this.signOut} /> 
          {__DEV__ && <DeveloperMenu/>}
        </View>
      );
    }
  }
}

export default AppView;
