import React, {PropTypes, Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View,Button,TextInput} from 'react-native';
import styles from './../../styles/myHealth';

class MyHealthView extends Component {
    static PropTypes = {

    }
    constructor(props,context){
        super(props,context);
        this.saveEvevt = this
            .saveEvevt
            .bind(this);
    }
    saveEvevt(){
        console.log('you pressed me');
    }
    render() {
        //const displayName = 'My Health View';
        return (
            <View style={styles.container}>
                <View style={styles.eventDetailHeader}>
                    <TouchableOpacity>
                        <Button
                            title="back"
                            accessibilityLabel="back"
                            onPress={this.saveEvevt}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.eventDetails}>
                    <Text>Event Details</Text>
                </View>
                <View style={styles.eventDetailTitle}>
                    <Text>Title:</Text>
                    <View
                        pointerEvents="box-none"
                        style={{borderWidth:1,marginTop:10,marginBottom:10,borderColor:'#ddd',width:150}}>
                        <TextInput underlineColorAndroid='transparent'/>
                    </View>
                </View>
                <View style={styles.eventDescription}>
                    <Text>
                       event description
                    </Text>
                </View>
                <TouchableOpacity>
                    <Button title='save' accessibilityLabel='save' onPress= {this.saveEvevt}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MyHealthView;
