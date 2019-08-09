import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export class PostItem extends Component {
    render() {

        const { post } = this.props;

        return (
            <View style={styles.Container}>
                <Card>
                    <CardItem header>
                        <Text>{post.title}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                {post.body}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>

        );
    }
}

styles = StyleSheet.create({
    Container : {
        flex: 1,
        margin: 5
    }
});
