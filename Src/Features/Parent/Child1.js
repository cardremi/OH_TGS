import React from 'react'
import {View, Text } from 'react-native'
import Child2 from './Child2'
import {useSelector} from 'react-redux'
export default function Child1() {
    const userState = useSelector(state => state.user)
    
    return (
        <View>
            <Text>{userState.status.toString()}</Text>
            <Child2/>
        </View>
    )
}
