import React, {Component} from 'react';
import { SafeAreaView, ScrollView  } from 'react-native'

import PostComponent from './PostComponent'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class DashboardScreen extends React.Component {
    static navigationOptions = {
      title: 'Posts',
    };

    state = {
      posts : [
        {
          img: 'https://preview.redd.it/x2mfwjn07wm31.jpg?width=960&crop=smart&auto=webp&s=604b7b268fcaffc80679614eba8b9648b03c8ff9',
          header: "u/RamseyPhotography - 1d - i.redd.it",
          title: 'Composed image of the moon from last night',
          tag: "Lunar",
          colorTag: "#A3A3A3",
          likes: 448,
          comments: [
            {
              user: 'RamseyPhotography',
              comment: 'I used two separates exposures for this image. One to get the details of the mopons surface, and the other to get the details in the clouds.',
              days: '1d', 
              likes: 5
            },
            {
              user: 'kbla64',
              comment: 'Mind blown! Did you recently post a similar image.',
              days: '1d', 
              likes: 2
            }
          ]
      }, 
      {
        img: 'https://preview.redd.it/qa3d6ernfdq31.jpg?width=640&crop=smart&auto=webp&s=52b42c6ffe91da6e593631b8bc7f53dc6ab4467f',
        header: "u/pbkoden - 2d - i.mgur",
        title: 'Ghost of Cassiopeia - HOO',
        tag: "DSOs",
        colorTag: "#7F42E4",
        likes: 335,
        comments: [
          {
            user: 'Bottom_racer',
            comment: 'I wouldnt call that unwanted flaring. Looks amazing.',
            days: '2d', 
            likes: 8
          },
          {
            user: 'Bobby_Wiley77',
            comment: 'That’s a really great picture!.',
            days: '2d', 
            likes: 2
          },
          {
            user: 'slightlyshorter',
            comment: 'Wow.. This is Incredible!',
            days: '2d', 
            likes: 2
          }
        ]
      }
    
      ]
    }

    detailsPost = (selectedPost: any, likes: any) => {
      const { navigate } = this.props.navigation;
      navigate('Post', { 
        data: selectedPost, likes
      })
    }

    renderList = () => {
      const list = this.state.posts.map( p => {
        return (
          <PostComponent 
            postData = { p } 
            navigate = { this.detailsPost }
          />
        );
      });
      return list;
    }
  
    render() {     
      return (
        <SafeAreaView >
          <ScrollView style={{paddingBottom: 20}} >
            { this.renderList() }
          </ScrollView>
        </SafeAreaView>
      )
    }
  }

