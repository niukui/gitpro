import React, {PropTypes, Component} from 'react';
import {TouchableOpacity, Image, Text, View, ActivityIndicator} from 'react-native';
import styles from './../../styles/home';
import commonStyles from './../../styles/common';

class HomeView extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        homeStateActions: PropTypes
            .shape({initHomeInfo: PropTypes.func.isRequired})
            .isRequired,
        navigationStateActions: PropTypes
            .shape({pushRoute: PropTypes.func.isRequired})
            .isRequired,
        infos: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.viewAttachments = this
            .viewAttachments
            .bind(this);
        this.initHomeInfo = this
            .initHomeInfo
            .bind(this);
    }

    componentDidMount() {
        if (!this.props.infos || (this.props.infos.profile === undefined || this.props.infos.profile === null
        || this.props.infos.profile.Username !== this.props.username)) {
            this.initHomeInfo();
        }
    }

    viewAttachments() {
        this
            .props
            .navigationStateActions
            .pushRoute({key: 'HomeAttachments', title: 'Attachments'});
    }

    initHomeInfo() {
        this
            .props
            .homeStateActions
            .initHomeInfo(this.props.username);
    }

    render() {

        if (this.props.loading) {
            return (
                <View style={{
                    flex: 1
                }}>
                    <ActivityIndicator style={commonStyles.centered}/>
                </View>
            );
        }

        const displayName = 'Home View';

        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{
                            uri: (this.props.infos && this.props.infos.profile && this.props.infos.profile.AvatarUrl)
                        }}/>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>
                            {`Welcome ${ (this.props.infos && this.props.infos.profile && this.props.infos.profile.Name) || ''}!`}
                        </Text>
                        <Text style={styles.memberId}>
                            {`Member ID: ${ (this.props.infos && this.props.infos.profile && this.props.infos.profile.MemberId) || ''}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.tips}>
                    <Text style={styles.tip}>
                        {`You have ${ (this.props.infos && this.props.infos.NewMessagesCount) || ''} new messages`}
                    </Text>
                    <Text style={styles.tip}>
                        {`You have ${ (this.props.infos && this.props.infos.NewAttachmentsCount) || ''} new attachments`}
                    </Text>
                </View>
                <View style={styles.attachments}>
                    <TouchableOpacity
                        style={styles.attachmentButton}
                        accessible={true}
                        accessibilityLabel={'View Attachments'}
                        onPress={this.viewAttachments}>
                        <Text style={styles.attachmentButtonText}>
                            View Attachments
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HomeView;
