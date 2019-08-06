import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import {PostItem} from './PostItem';

export class Posts extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
                    <PostItem/>
            </ScrollView>
        );
    }
}
