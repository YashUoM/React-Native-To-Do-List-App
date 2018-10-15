

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ListItem from './listitem';
type Props = {};
export default class Main extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            listItemArray:[],
            listitemText:''
        }
    }
  render() {
      let listitems = this.state.listItemArray.map((val,key)=>{
          return <ListItem key={key} keyval={key} val={val}
          delete={ () => this.delete(key)}/>
      })
    return (
      <View style={styles.container}>
       <View  style={styles.header}>
       <Text style={styles.headerText}>My To Do </Text>
       
       </View>
       <ScrollView>
           {listitems}
       </ScrollView>
       <View>
           
           <TextInput style={styles.textInput}
           onChangeText={(listitemText) =>this.setState({listitemText})}
           placeholder='Note'
           placeholderTextColor='black'
           underlineColorAndroid='transparent'
           ></TextInput>
                  </View>

       <TouchableOpacity onPress={this.addListItem.bind(this)} style={styles.addbtn}>
           <Text>+</Text>
       </TouchableOpacity>
      </View>
    );
  }
  addListItem() {
      if(this.state.listitemText){
          var date= new Date();
          this.state.listItemArray.push({
              'date': date.getFullYear() +
              "/" + (date.getMonth() +1) +
              "/" + date.getDate(),
              'listitem': this.state.listitemText
          });

          this.setState({
             listItemArray:this.state.listItemArray})
          this.setState({
              listitemText:''
          });
      }
  }
   delete(key){
    this.state.listItemArray.splice(key, 1);
    this.setState({listItemArray: this.state.listItemArray});
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header:{
      backgroundColor:'#F46572',
      justifyContent:'center',
      alignItems:'center',
      borderBottomColor:'#c2c6c5',
      height:100,
      flexDirection:'row'
  },
  headerText:{
      fontSize:30,
      color:'white'
  },
  textInput:{
      alignSelf:'stretch',
      color:'#fff',
      padding:20,
      backgroundColor:'#F58C93',
      borderTopWidth:2,
      borderTopColor:'#868e8c'
  },
  addtext:{
      width:24,
      backgroundColor:'white'
  },
  addbtn:{
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:'#F46572',
      width:90,
      height:90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8
  }

});
