import React, { Component } from 'react'
import { View, Text, Image, StyleSheet , Button, SafeAreaView, ScrollView,} from 'react-native'
import CommentsComponent from './CommentComponent';
import PostComponent from './PostComponent'


export default class CommentsScreen extends Component {

  static navigationOptions = {
    title: "Post Description",
  }

  getNav = () => {
    const { navigation } = this.props;
    const data = {
      post: navigation.getParam('data'),
      likes: navigation.getParam('likes')
    }
    return data;
  }

  renderComments = () => {

    const data = this.getNav();
    const commentsList = data.post.comments.map((comment: any) => {
      return (
        <CommentsComponent commentData={comment}/>
      );
    });
    return commentsList;
  }

  render() { 
    const data = this.getNav(); 
    return (
      <SafeAreaView >
      <ScrollView style={{paddingBottom: 20}} >
        <View style={{backgroundColor: "#dcdbe3", marginBottom: 10}}>
          <PostComponent 
            postData={data.post} 
            likes={data.likes}
            />
          <View style={{backgroundColor: "#dcdbe3", marginBottom: 10}}></View>
          { this.renderComments() }
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}
