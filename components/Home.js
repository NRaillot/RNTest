import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Go to posts" onPress={Actions.posts}/>
            </View>
        );
    }
}
