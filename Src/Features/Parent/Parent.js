import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Child1 from './Child1'
import {useSelector} from 'react-redux'
export default function Parent() {
  const userState = useSelector(state => state.user)


  

  return <View>
    <Text>{userState.user.name}</Text>
    <Child1/>
    

  </View>;
}
