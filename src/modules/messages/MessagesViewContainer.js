import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MessagesView from './MessagesView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as MessagesStateActions from './MessagesState';

export default connect(state => ({
  loading: state.getIn(['messages', 'loading']),
  messages: state.getIn(['messages', 'messages']) && state
    .getIn(['messages', 'messages'])
    .toJS
    ? state
      .getIn(['messages', 'messages'])
      .toJS()
    : state.getIn(['messages', 'messages']),
  username: state.getIn(['session', 'username'])
}), dispatch => {
  return {
    navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
    messagesStateActions: bindActionCreators(MessagesStateActions, dispatch)
  };
})(MessagesView);
