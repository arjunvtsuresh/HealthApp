import React from 'react'
import { View , StyleSheet, Text , TextInput } from 'react-native';

function Card(props) {
    const [height, onChangeHeight] = React.useState('');
    const [weight, onChangeWeight] = React.useState('');
  return (
        <View style={styles.container} >
        <Text>Enter your Height:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeHeight}
              value={height}
              placeholder='Height'
            />
        <Text>Enter your Height:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeWeight}
            value={weight}
            placeholder='Weight'
            keyboardType="numeric"
          />
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:25,
        justifyContent:'center',
        alignItems: 'center',
        boxShadow: "10px 10px 17px -12px grey",
        height: '50%',
        width: '85%',
        justifyContent: 'center',
        alignItems:'center'
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:"white"
    }
})

export default Card;
