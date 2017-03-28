import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeView from './HomeView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as HomeStateActions from '../home/HomeState';

export default connect(
  state => ({
    infos: state.getIn(['home', 'infos']) && state.getIn(['home', 'infos']).toJS ? state.getIn(['home', 'infos']).toJS() : state.getIn(['home', 'infos']),
    loading: state.getIn(['home', 'loading']),
    username: state.getIn(['session', 'username']),
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
      homeStateActions: bindActionCreators(HomeStateActions, dispatch)
    };
  }
)(HomeView);
