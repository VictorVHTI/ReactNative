import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native'
import PostComponent from './PostComponent'


export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Posts',
  }

  state = {
    posts : [
      {
        usrImage: 'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        category: "r/astrophotography",
        title: 'Composed image of the moon from last night',
        hash: "DSOs",
        user: 'RamseyPhotography',
        url: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        days: '2d',
        comments: [
          {
            user: 'Emily Vancamp',
            comment: 'That picture is awesome!',
            days: '24m', 
            likes: 1029
          },
          {
            user: 'Cristopher Chance',
            comment: 'What kind of camera did you use?',
            days: '58m', 
            likes: 10
          },
          {
            user: 'Andrea Martinez',
            comment: 'Did you upload a similar picture?',
            days: '1d', 
            likes: 2
          },
        ]
    },
    {
      usrImage: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
      category: "r/astrophotography",
      title: 'M31 Andromeda Galaxy',
      hash: "Planetary",
      user: 'Amelia Tucker',
      url: 'https://preview.redd.it/5yevhqsvvqp31.jpg?width=640&crop=smart&auto=webp&s=7ff37fe944695b65a3e1238c44d6208cf1f8d927',
      days: '4d',
      comments: [
        {
          user: 'Bottom_racer',
          comment: 'This is a super natural shot... love it. Awesome',
          days: '18 hours', 
          likes: 879
        },
        {
          user: 'to4st',
          comment: "Looks awesome! Could you share how it looked before stacking, if there's anything visible at all? Maybe after stacking and before the other editing?",
          days: '17 hours', 
          likes: 108
        },
        {
          user: 'Bottom_racer',
          comment: 'This is a gorgeous shot OP! I just set it as my desktop background :)',
          days: '17 hours', 
          likes: 2
        },
      ]
    }
  
    ]
  }
      
  

  
  navigateTo = (selectedPost, likes) => {
    const { navigate } = this.props.navigation;
    navigate('Comments', { selected: selectedPost, likes})
  }

  render() {

    return <Text>Hola</Text>
    // const postsList = this.state.posts.map(post => {
    //   return (
    //     <PostComponent postData={post} navigate={this.navigateTo}/>
    //   );
    // });
    // return (
    //   <SafeAreaView >
    //   <ScrollView style={{paddingBottom: 20}} >
    //     {postsList}
    //   </ScrollView>
    //   </SafeAreaView>
    // )
  }
}
