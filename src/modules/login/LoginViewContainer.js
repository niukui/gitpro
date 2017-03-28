import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginView from './LoginView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as LoginStateActions from './LoginState';

export default connect(
  state => ({
    loading: state.getIn(['login', 'loading']),
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      loginStateActions: bindActionCreators(LoginStateActions, dispatch)
    };
  }
)(LoginView);
