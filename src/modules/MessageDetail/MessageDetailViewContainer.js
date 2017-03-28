import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MessageDetailView from './MessageDetailView';
import * as NavigationStateActions from '../navigation/NavigationState';
import * as MessageDetailStateActions from './MessageDetailState'
export default connect(
    state => ({
        //loading:state.get(['messageDetail','loading'])
    }),
    dispatch => {
        return {
            navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
            //MessageDetailStateActions:bindActionCreators(MessageDetailStateActions,dispatch)
        };
    }
)(MessageDetailView);