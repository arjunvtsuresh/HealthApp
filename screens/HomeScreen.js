import React from 'react'
import { ImageBackground , View, Text , StyleSheet , StatusBar} from 'react-native';
import ButtonElement from '../components/ButtonElement';


function HomeScreen({navigation}) {

    const BMIButton=() =>{navigation.navigate('BMI')}
    const YogaBtn = () =>{navigation.navigate('Yoga')}
    const MindBtn = () =>{navigation.navigate('Mindfullness')}
    const WeightBtn  = () =>{navigation.navigate('Weight')}
  return (
    <ImageBackground source={require('../assets/health.jpg')} resizeMethod='auto' resizeMode='cover' style={styles.wrapper}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Health</Text>
              <Text style={{fontSize: 14 , color:'white'}} > Version 1.0</Text>
            </View>
            <View style={styles.FeatureContainer}>
              <ButtonElement title='Calcualte BMI' HandlePress={BMIButton} icons={require('../assets/icons/bmi.png')}/>
              <ButtonElement title='Yoga Poses' HandlePress={YogaBtn} icons={require('../assets/icons/yoga.png')}/>
              <ButtonElement title='Mindfullness' HandlePress={MindBtn} icons={require('../assets/icons/meditation.png')}/>
              <ButtonElement title='Weight Training' HandlePress={WeightBtn} icons={require('../assets/icons/weigh.png')}/>
            </View> 
    </ImageBackground>
  )
}


const styles = StyleSheet.create({

    header : {
      fontWeight : 'bold',
      fontSize : 40,
      color: 'white',
    },
    headerContainer : {
      flex:1,
      paddingBottom : 30,
      alignItems : 'center',
      justifyContent: 'center',
    },
    FeatureContainer:{
      alignItems:"center",
      flex:2,
      justifyContent:'space-evenly'
    },
    wrapper:{
      flex: 1,
      paddingTop: Platform.OS==='android' ? StatusBar.currentHeight: 0,
    }
  
  
  });
  



export default HomeScreen;

