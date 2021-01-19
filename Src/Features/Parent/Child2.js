import React from 'react'
import { View, Text , Button} from 'react-native'
import {useDispatch} from 'react-redux'
export default function Child2() {
    const onTap = ()=>{
        const dataBaru = {
            user : {
                name : 'Jhonny Punish'
            }
        }
        disPatch({
            type: 'CHANGE_NAME', 
            payload:dataBaru
        })
    }
    const disPatch =useDispatch()
    return (
        <View>
            <Text>Halo Aku Child 2</Text>
            <Button title='Change Me ' onPress={onTap} />
        </View>
    )
}
