import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card } from 'react-native-elements';

export default class PostComponent extends React.Component {
  state={
    likes : this.props.postData.likes
  }

  upLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  downLikes = () => {
    this.setState({
      likes: this.state.likes - 1
    })
  }

  likesAction = (accion: string) => {
    if (accion == 'up'){
      this.setState({
        likes: this.state.likes + 1 
      })
    }
    else {
      this.setState({
        likes: this.state.likes - 1
      })
    }
  }

  render() { 
    const p = this.props.postData;
    
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.navigate(p, this.state.likes) }}>
        <Card> 
        <Text style={{color: "#616161", fontSize: 12}}>
            {p.header}
          </Text>
        <Text style={{fontWeight: "bold", fontSize: 16}}>
          {p.title}
        </Text>
        <Text style={{
          color: "white",
          padding: 5, borderRadius: 3, 
          backgroundColor: p.colorTag, marginBottom: 5, marginTop: 5, alignSelf: 'flex-start'}}>{p.tag}
        </Text>   
          <Image source={{uri: p.img}} style={{width: "100%", height: 200}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <TouchableOpacity onPress={this.downLikes} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="arrow-down" size={15} color="#616161" />
            </TouchableOpacity>
            <Text style={{marginTop: 10, color: "#616161", alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold'}}>{this.state.likes}</Text>
            <TouchableOpacity onPress={this.likesAction} style={{ marginTop: 10, alignSelf: 'flex-start'}}>
              <Icon style={{alignSelf: 'flex-start', paddingTop: 2, paddingLeft: 10}} name="arrow-up" size={15} color="#616161" />
            </TouchableOpacity>
          </View>         
          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="comment-alt" size={15} color="#616161" />
            <Text style={{marginTop: 10, color: "#616161", fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 15}}>{p.comments.length}</Text>
          </View>
          <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row',}}>
            <Icon style={{marginTop: 10, alignSelf: 'flex-start', paddingTop: 4, paddingRight: 10}} name="share" size={15} color="#616161" />
            <Text style={{marginTop: 10, color: "#616161", fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 15}}>Share</Text>
          </View>
          </View>
        </Card>
      </TouchableWithoutFeedback>
    )
  }
}