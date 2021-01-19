import React , {useEffect} from 'react'
import {FlatList, Text, View} from 'react-native'
import axios from 'axios'
import *  as URL from '../../Utils/URL'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import MovieItem from '../../Component/MovieItem'

const Home = () => {

    const fetchPopularMovies = async () => {
        const respond = await axios.get (URL.baseURL + URL.popularURL + URL.APIkey)
        .then (res => res.data)
        .catch(e => {
            console.log (e)
            return null
        }) 


        if (respond ) {
            setMoviesToredux (respond.results)
        }else {
            console.log('Gagal Mengambil Data')
        }
    }

    const setMoviesToredux = (movies)=>{
        const dataBaru = {
            movies : movies
                
        }

        disPatch({
            type: 'FILL_MOVIES', 
            payload:dataBaru
        })
    }

    const disPatch =useDispatch()
    const movieState = useSelector(state => state.movie)

    useEffect(() => {
        fetchPopularMovies ()
    }, [])

    return(
        <View style={{flex:  1}}>
        
        <FlatList 
        keyExtractor={(item) => item.id.toString ()}
        data ={movieState.movies}
        numColumns = {2}
        renderItem = {({item}) => {
            return (
                <MovieItem movie={item}/>
            )
        }}
        />
        
        </View>

    )
}
export default Home;