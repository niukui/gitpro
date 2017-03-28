import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MyHealthView from './MyHealthView';
import * as NavigationStateActions from '../navigation/NavigationState';

export default connect(
  state => ({
  }),
  dispatch => {
    return {
      navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
    };
  }
)(MyHealthView);
