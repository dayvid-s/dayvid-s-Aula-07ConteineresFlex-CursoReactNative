/* eslint-disable prettier/prettier */

import React from 'react';
import {View} from 'react-native';

export default function (props) {
    return (
    <View style={{width: '100%',height:'100%', flexDirection:'row-reverse',alignItems:'center', justifyContent:'space-between'}}>
        <View style={{width:50, height: 50, backgroundColor:'#00f'}} ></View>
        <View style={{width:50, height: 50, backgroundColor:'#00a'}} ></View>
        <View style={{width:50, height: 50, backgroundColor:'#005'}} ></View>
    </View>
   );
}
