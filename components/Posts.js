import React, { Component } from 'react';
import { Text, ScrollView, ActivityIndicator, View } from 'react-native';
import {PostItem} from './PostItem';
import {fetchPosts} from '../api';

export class Posts extends Component {

    state = {
        posts: null
    };

    componentDidMount() {
        fetchPosts().then(posts => {
            this.setState({posts: posts.data});
        })
    }

    render() {
        const { posts } = this.state;

        return (
            <View style={{ flex: 1}}>
                <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                    {
                        posts ?
                            posts.map(post => {
                               return <PostItem post={post}/>
                            }) :  <ActivityIndicator style={{marginTop: 20}} size="large" />

                    }
                </ScrollView>
            </View>
        );
    }
}
