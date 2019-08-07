import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class PostItem extends Component {
    render() {

        const { post } = this.props;
console.log(this.props)
        return (
            <View style={styles.Container}>
                <Text style={{textAlign: 'center'}}>{post.title}</Text>
                <Text style={{textAlign: 'center'}}>{post.body}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 0.1,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#939497',
        margin: 10,
        padding: 10,
        height:'10%',
        width:'90%',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})
