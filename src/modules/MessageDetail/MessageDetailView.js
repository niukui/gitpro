import React, {PropTypes, Component} from 'react';
import {Text, View} from 'react-native';
import styles from './../../styles/messageDetail'
//import commonStyles from './../../styles/common'

class MessageDetailView extends Component {
    static propTypes = {
        //loading:PropTypes.bool.isRequired,
        // messageDetailStateAction:PropTypes
        //     .shape()
        //     .isRequired,
        messageDetail:PropTypes
            .object,
    };
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
        return (
            <View style={styles.container}>
                <View style={styles.messageHeader}>
                    <View style={{flex:1,alignItems:'center',marginRight:40}}>
                        <Text style={styles.recipient}>Joe Smith</Text>
                        <Text style={styles.daytime}>Tuesday , 3:00P.M.</Text>
                    </View>
                </View>
                <View style={styles.messageBody}>
                    <Text style={{flex:1}}> message body</Text>
                </View>
            </View>

        );
    }
}

export default MessageDetailView;
