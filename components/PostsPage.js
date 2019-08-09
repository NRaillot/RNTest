import React, { Component } from 'react';
import { Text, ScrollView, ActivityIndicator, View } from 'react-native';
import {PostItem} from './PostItem';

export class PostsPage extends Component {


    render() {
        const { postsPage } = this.props;

        return (
            <View style={{ flex: 1}}>
                    {
                        postsPage ?
                            postsPage.map(post => {
                                return <PostItem post={post}/>
                            }) : <ActivityIndicator style={{marginTop: 20}} size="large" />

                    }
            </View>
        );
    }
}
