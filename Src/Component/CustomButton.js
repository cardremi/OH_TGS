import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CustomButton({title, onTap}) {
  const names = ['Fravania', 'Safitri Botani', 'Dewangga', 'Dedy'];

  const temp = () => 
  {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomName = names[randomNumber];
    onTap(randomName);
  };

  return (
    <TouchableOpacity onPress={temp} style={styles.button}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
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
