import React, {PropTypes, Component} from 'react';
import {TouchableHighlight, Text, View, ActivityIndicator, TextInput} from 'react-native';
import styles from './../../styles/login';
import commonStyles from './../../styles/common';

class LoginView extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        loginStateActions: PropTypes
            .shape({login: PropTypes.func.isRequired})
            .isRequired,
        navigationStateActions: PropTypes
            .shape({pushRoute: PropTypes.func.isRequired})
            .isRequired,
        signIn: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: ''
        };
        this.login = this
            .login
            .bind(this);
    }

    login() {
        this
            .props
            .loginStateActions
            .login(this.state.username || 'fake', this.state.password, this.props.signIn);
    }

    componentDidMount() {}

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
                <TextInput
                    style={styles.username}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    placeholder='User Name'/>
                <TextInput
                    style={styles.password}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder='Password'
                    secureTextEntry={true}/>
                <TouchableHighlight style={styles.loginButton} onPress={this.login}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default LoginView;
