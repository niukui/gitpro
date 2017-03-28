import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewMessageView from './NewMessageView';
import * as NavigationStateActions from '../navigation/NavigationState';

export default connect(
    state => ({
    }),
    dispatch => {
        return {
            navigationStateActions: bindActionCreators(NavigationStateActions, dispatch),
        };
    }
)(NewMessageView);