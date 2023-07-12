import React, { useRef, useState } from 'react'
import { View ,Image,    StyleSheet, Text,Button} from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import output from '../assets/video/video.mp4'

function Mindfullness() {
const video = useRef(null);
const [status , setStatus] = React.useState({});
  return (
    <View style={styles.container}>
        <View style={[styles.textCard, styles.shadowprop]}>
            <Image source={require('../assets/icons/meditation.png')}/>
            <Text style={styles.HeaderText}>
                Meditation often involves practicing mindfulness, 
                which is the state of non-judgmental awareness of
                the present moment.
                Mindfulness helps individuals develop a deeper 
                connection with the present moment, reducing 
                rumination about the past or worries about the future.
            </Text>
         </View>
        <Video
            ref={video}
            style={styles.video}
            source={output}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            playInBackground
            
        />
        <View style={styles.buttons}>
            <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
            />
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    video : {
        width: '95%',
        height: '40%',
        borderRadius: 20,
        borderWidth : 2,
        borderColor : 'black',

    },
    HeaderText:{
        fontSize: 18,
        fontWeight: 400,
        padding : 25,
        color: 'black',

    },
    textCard:{
        padding: 10,
        backgroundColor:'white',
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor:'black',
        borderRadius: 10,
        alignContent:'center',
        alignItems: 'center',

    },
    shadowprop:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
})
export default Mindfullness;
