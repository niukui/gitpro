import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'stretch'
    },
    password: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'stretch'
    },
    loginButton: {
        alignSelf: 'stretch',
        paddingTop: 10
    },
    loginButtonText: {
        height: 40,
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical:'center',
        backgroundColor: '#7CFC00',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15
    }
});