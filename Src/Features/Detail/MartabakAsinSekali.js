import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import * as URL from '../../Utils/URL';
import {Rating} from 'react-native-ratings';
import { movie } from '../../Redux/MovieReducer';

export default function MartabakAsinSekali({navigation, route}) {
  const [movieinfo, setmovieinfo] = useState({});

  const fetchDetailMovies = async () => {
    const respond = await axios
      .get(URL.baseURL + URL.MovieDetailURL(route.params) + URL.APIkey)
      .then((res) => res.data)
      .catch((e) => {
        console.log(e);
        return null;
      });

    if (respond) {
      console.log(respond);
      setmovieinfo(respond);
    } else {
      console.log('Gagal Mengambil Data');
    }
  };
  useEffect(() => {
    fetchDetailMovies();
  }, []);

  return (
    <ScrollView>
      <View style={styles.infoGBR}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + movieinfo.poster_path,
          }}
          style={styles.Gbr}
        />
      </View>

      <Text>{movieinfo.original_title}</Text>
      <Text>{movieinfo.overview}</Text>
      <Text>
        {movieinfo.genres
          ? movieinfo.genres.map((genre) => genre.name).join()
          : null}
      </Text>
      <Rating
        readonly ={true}
        ratingCount= {5}
        startingValue= {movieinfo.vote_average ? movieinfo.vote_average/2 : 1}
            
        style={{paddingVertical: 10}}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  infoGBR: {
    height: 450,
  },
  Gbr: {
    height: '100%',
  },
});
