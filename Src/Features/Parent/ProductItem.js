import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function ProductItem({product, addToCart}) {
 

  const temp = () => 
  {
    addToCart(product) 
  };

  return (
    <View>
        <Text>{product}</Text>
        <TouchableOpacity onPress={temp} style={styles.button}>
      <Text style={styles.buttonTitle}>Tambahkan Ke Keranjang</Text>
    </TouchableOpacity>

    </View>
    
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 5,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
  },
});
