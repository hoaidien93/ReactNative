import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class HoaiDien extends React.Component{
    render(){
        return <View>
            <Text style={style.header}>HoaiDien</Text>
        </View>;
    }
}

const style = StyleSheet.create({
    header: {
        color: 'red',
        fontSize: 40
    }
})