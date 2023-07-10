import React from 'react'
import { View , StyleSheet, Text} from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import output from '../assets/video/video.mp4'

function Mindfullness() {
const video = React.useRef(null);
  return (
    <View style={styles.card}>
        <Text style={styles.HeaderText}>Meditation often involves practicing mindfulness, which is the state of 
            non-judgmental awareness of the present moment. 
            Mindfulness helps individuals develop a deeper 
            connection with the present moment, reducing 
            rumination about the past or worries about the future.
        </Text>
        <Text style={styles.BigText}>Tap Video to Meditate</Text>
        <Video
            ref={video}
            style={styles.video}
            source={output}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            
        />
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
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
        fontSize: 20,
        fontWeight: 'bold',
        padding : 20,
    },
    BigText:{
        fontSize: 40,
        color: "dodgerblue",
        fontWeight: 900,
        alignItems: 'center',
        justifyContent: 'center'

    }

})
export default Mindfullness;
