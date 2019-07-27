import React from 'react'
import Navigation from './navigation/Navigation';

import * as Font from 'expo-font';
import {ActivityIndicator, Dimensions, ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';

let {height, width} = Dimensions.get('screen');

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            "Futura-medium": require("./assets/fonts/FuturaPTMedium.otf"),
            "Futura-heavy-oblique": require("./assets/fonts/FuturaPTHeavyOblique.otf"),
            "Futura-bold": require("./assets/fonts/FuturaPTBold.otf"),
        });

        this.setState({fontLoaded: true});
    }


    render() {
        if (!this.state.fontLoaded) {
            return (
                <View style={styles.container}>
                    <StatusBar hidden/>
                    <ImageBackground
                        source={require('./assets/bg_loading.png')}
                        style={{flex: 1, width: width, height: height, zIndex: 0}}
                    >
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" color="white"/>
                            <Text/>
                        </View>
                    </ImageBackground>
                </View>
            );
        }
        return (
            <Navigation/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
