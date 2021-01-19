import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Image } from 'react-native'

const { width, height } = Dimensions.get('window');
export default function MovieItem({movie}) {
    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.container}>
        <View style={{flex:1}}>
            <Image source={{uri:'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}} style={{...StyleSheet.absoluteFillObject}}/>
        </View>
            
            <Text style={styles.title}>{movie.original_title}</Text>
            <Text>{movie.vote_average}</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}

const styles =StyleSheet.create ({
    root :{
        margin : 8,
        width:width * 0.5 ,


    },
    container :{
        width : width * 0.4,
        height : height * 0.4,
    },
    title :{
        fontWeight:'bold',
        fontSize :14,
        marginTop: 5,
    }
})
