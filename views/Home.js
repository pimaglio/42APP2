import React from 'react'
import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HOME PAGE</Text>
                <ActivityIndicator/>
                <StatusBar hidden/>
            </View>
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
