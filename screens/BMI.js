import React from 'react';
import {View , Text, StyleSheet, TextInput} from 'react-native';
import Card from '../components/Card';


function BMI({navigation , route}) {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex :1,
    alignItems:'center',
    margin: 10,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default BMI;
