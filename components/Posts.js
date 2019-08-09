import React, {Component} from 'react';
import {Text, ScrollView, ActivityIndicator, View, StyleSheet} from 'react-native';
import {PostItem} from './PostItem';
import {fetchPosts} from '../api';
import {PostsPage} from './PostsPage';
import {FAB} from 'react-native-paper';

export class Posts extends Component {

    state = {
        pages: null,
        pageIndex: 0,
    };

    componentDidMount() {
        fetchPosts().then(postData => {
            let posts = this.chunk(postData.data.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)), 10);
            let pages = posts.map(postsPage => {
                return <View style={{flex: 1}}><Text>Page {posts.indexOf(postsPage) + 1}</Text><PostsPage
                    postsPage={postsPage}/></View>;
            });

            this.setState({pages});
        });
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
        const {pages, pageIndex} = this.state;
        return pages[pageIndex];
    }

    nextPage() {
        this.setState({pageIndex: this.state.pageIndex + 1});
    }

    prevPage() {
        this.setState({pageIndex: this.state.pageIndex - 1});
    }

    render() {
        const {pages, pageIndex} = this.state;

        console.log(pages);
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                    {
                        pages ? this.renderPage() : <ActivityIndicator style={{marginTop: 20}} size="large"/>
                    }
                </ScrollView>
                {
                    pages ?
                        pageIndex < pages.length - 1 ? <FAB
                            style={styles.fabNext}
                            small
                            label="Next Page"
                            onPress={() => this.nextPage()}
                        /> : null
                        : null
                }
                {
                    pages ?
                        pageIndex > 0 ? <FAB
                            style={styles.fabPrev}
                            small
                            label="Previous Page"
                            onPress={() => this.prevPage()}
                        /> : null
                        : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fabNext: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    fabPrev: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
    },
});
