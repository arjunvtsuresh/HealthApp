import React, { useRef } from 'react'
import { View , StyleSheet, Image , Text,Button , Linking} from 'react-native'

function Card(props) {
    const image = useRef(null);

  return (
    <View style={styles.container}>
        <Image  
        style={styles.image}
        ref={image}
        source={{
            width:300,
            height:300,
            uri: props.Imageuri
        }}
        />
        <Text style={styles.text}>{props.text}</Text>
        <Text>{props.desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems:'center',
        elevation: 4,
        borderColor: 'black',
        margin: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,

    },
    text:{
        fontSize :25,
        fontWeight:'600',
        color:'#4B0082',
    },
    image:{
        borderRadius: 10,
    }
})

export default Card;
