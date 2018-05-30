import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

class Newpage extends Component{
    render(){
        return(<Text style={mystyle.text} >
            This is test
        </Text>)
    }
}

const mystyle = StyleSheet.create({
    text:{
        color: '#656565',
        flex:1
    }
})

export default Newpage;