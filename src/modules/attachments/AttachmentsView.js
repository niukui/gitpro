import React, {PropTypes, Component} from 'react';
import {Text, View} from 'react-native';

class AttachmentsView extends Component {
    render() {
        const displayName = 'Attachments View';
        return (
            <View>
                <Text>
                    {displayName}
                </Text>
            </View>
        );
    }
}

export default AttachmentsView;
