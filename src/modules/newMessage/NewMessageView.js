import React, {PropTypes, Component} from 'react';
import {Text, View,Button,TextInput,} from 'react-native';
import styles from './../../styles/NewMessage';

class NewMessageView extends Component {
    renderHeader(){
        return(
            <View style={styles.messageHeader}>
                <Text>To:</Text>
                <Text style={{fontWeight:'bold'}}>Joe Smith</Text>
            </View>
        )
    }
    renderBody(){
        return(
            <View style={styles.messageBody}>
                <Text style={{flex:.5,marginBottom:5}}>subject:</Text>
                <TextInput
                    style={styles.messageSubject}

                />
                <TextInput
                    style={styles.messageMain}
                    placeholder="Write a message.."
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderBody()}
                <Button title='Send Message'/>
                <View style={{flex:5}}></View>
            </View>
        );
    }
}

export default NewMessageView;