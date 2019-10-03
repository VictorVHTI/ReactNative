import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CommentsComponent extends React.Component {
  
  state = {
    likes: this.props.commentData.likes,
  };

  upLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  downLikes = () => {
    this.setState({
      likes: this.state.likes - 1,
    });
  }

  render() {
    const c = this.props.commentData; 
    return (
      <View style={{padding: 10, marginBottom: 10, marginLeft:15, marginRight:15, backgroundColor: "white"}}>
        <Text style={{color: "#aaa", fontSize: 12, fontWeight: 'bold'}}>{c.user}  {c.days}</Text>
        <Text style={{fontSize: 16, marginTop: 3, textAlign: "left"}}>{c.comment}</Text>
        <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row-reverse',}}>
            <TouchableOpacity onPress={this.upLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 2, paddingLeft: 10}} name="arrow-up" size={15} color="#616161" />
            </TouchableOpacity>
            <Text style={{marginTop: 10, color: "#616161", alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold'}}>{this.state.likes}</Text>
            <TouchableOpacity onPress={this.downLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="arrow-down" size={15} color="#616161" />
            </TouchableOpacity>

            <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', marginRight: 20}}>
                <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="reply" size={15} color="#616161" />
                <Text style={{marginTop: 10, color: "#616161", fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 15}}>Reply</Text>
            </View>
            <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', marginRight: 10}}>
                <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="award" size={15} color="#616161" />
            </View>
        </View>
        
      </View>
    );
  }
}
