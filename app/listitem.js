/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


type Props = {};
export default class ListItem extends Component<Props> {
  render() {
    return (
      <View key={this.props.keyval} style={styles.listitem}>
      <Text style={styles.listitemtext}>{this.props.val.date}</Text>
      <Text style={styles.listitemtext}>{this.props.val.listitem }</Text>
      <TouchableOpacity onPress={this.props.delete} style={styles.delete}>
      <Text style={styles.deletetext}>Delete</Text></TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    listitem:{
        position:"relative",
        padding:30,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#c2c6c5'
    },
    listitemtext:{
        paddingLeft: 20,
        borderLeftWidth:10,
        borderLeftColor:'#c2c6c5'
    },
    delete:{
        position:'absolute',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#F46572',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    deletetext:{
        color:'white'
    }
});
