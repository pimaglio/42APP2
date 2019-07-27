import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Text
} from 'react-native';

import Auth from '../actions/Auth';
import Theme from '../constants';

export default class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        await AsyncStorage.getItem('userToken', (err, result) => {
            if (result !== null) {
                let auth = new Auth();
                auth.checkToken(result).then((response) => {
                    if (response !== false)
                        this.props.navigation.navigate('App');
                    else
                        this.props.navigation.navigate('Auth');
                });
            } else
                this.props.navigation.navigate('Auth');
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <ActivityIndicator size="large" color="black"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});