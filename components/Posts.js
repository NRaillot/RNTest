import React, { Component } from 'react';
import { Text, ScrollView, ActivityIndicator, View } from 'react-native';
import {PostItem} from './PostItem';
import {fetchPosts} from '../api';
import {PostsPage} from './PostsPage';

export class Posts extends Component {

    state = {
        pages: null,
        pageIndex: 0
    };

    componentDidMount() {
        fetchPosts().then(postData => {
            let posts = this.chunk(postData.data.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)),10);
            let pages = posts.map(postsPage => {
                return <View style={{ flex: 1}}><Text>Page {posts.indexOf(postsPage) + 1}</Text><PostsPage postsPage={postsPage}/></View>
            });

            this.setState({pages});
        })
    }

    chunk(array, size) {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
            const last = chunked_arr[chunked_arr.length - 1];
            if (!last || last.length === size) {
                chunked_arr.push([array[i]]);
            } else {
                last.push(array[i]);
            }
        }
        return chunked_arr;
    }

    renderPage() {
        const { pages, pageIndex } = this.state;
        return pages[pageIndex]
    }

    switchPage(pageIndex) {
        this.setState({pageIndex})
    }

    render() {
        const { pages } = this.state;

        console.log(pages)
        return (
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                {
                    pages ? this.renderPage() : <ActivityIndicator style={{marginTop: 20}} size="large" />
                }
            </ScrollView>
        );
    }
}
