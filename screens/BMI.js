import React from 'react';
import {View , Text, StyleSheet, TextInput} from 'react-native';
import InpurCard from '../components/InpurCard';


function BMI({navigation , route}) {
  return (
    <View style={styles.container}>
      <InpurCard
      firstInputField='Height in cm' 
      secondInputField='Weight in kg'
      keyboardType='numeric'
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex :1,
    alignItems:'center',

  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default BMI;
