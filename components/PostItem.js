import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class PostItem extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text style={{textAlign: 'center'}}>Post Content.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#939497',
        marginTop: 20,
        height:'10%',
        width:'90%',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})
