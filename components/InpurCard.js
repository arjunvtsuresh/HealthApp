import React from 'react'
import { View , StyleSheet, Text , TextInput, Button } from 'react-native';

function Card(props) {
    const [height, onChangeHeight] = React.useState('');
    const [weight, onChangeWeight] = React.useState('');
    const [bmi , setBmi] = React.useState('');
    const [health, setHealth] = React.useState('');
   
    const HandlePress=(props)=>{
      onChangeHeight(height=>height);
      onChangeWeight(weight=>weight);
      let height_curr = parseInt(height);
      let weight_curr = parseInt(weight);
      let obese_base = 29.9;
      let healthy_base = 24.9;
      let underweight_base = 18.5;
      let bmi_value = ((weight_curr)/(((height_curr)/100)*((height_curr)/100))).toFixed(2)
      setBmi(bmi => bmi_value);

      // if(parseInt(bmi_value)>obese_base){
      //   health_val='You are obese';
      //   health_ind = 0;
      //   setHealth(health=>health_val)
      // }
      // else if(parseInt(bmi_value)<obese_base && parseInt(bmi_value)>healthy_base){
      //   health_val = 'You are OverWeight';
      //   health_ind= 1;
      //   setHealth(health=>health_val)
      // }
      // else if(parseInt(bmi_value)>underweight_base && parseInt(bmi_value)<healthy_base){
      //   health_val ='Your are Healthy ';
      //   health_ind=2;
      //   setHealth(health=>health_val)
      // }
      // else if(parseInt(bmi_value)<underweight_base){
      //   health_val='You are Under Weight Improve your Health by Intaking more Calorie Foods'
      //   health_ind=3;
      //   setHealth(health=>health_val)
      // }

      switch (true) {
        case  parseInt(bmi_value)> obese_base:
          health_val='You are obese';
          health_ind = 0;
          setHealth(health=>health_val);
          break;
        case parseInt(bmi_value)<obese_base && parseInt(bmi_value)>healthy_base:
          health_val = 'You are OverWeight';
          health_ind= 1;
          setHealth(health=>health_val);
          break;
        case parseInt(bmi_value)>underweight_base && parseInt(bmi_value)<healthy_base:
          health_val ='Your are Healthy ';
          health_ind=2;
          setHealth(health=>health_val);
          break;
        case parseInt(bmi_value)<underweight_base:
          health_val='You are Under Weight Improve your Health by Intaking more Calorie Foods'
          health_ind=3;
          setHealth(health=>health_val);
          break;
        default:
          health_val="Enter a valid Height and Weight";
          setHealth(health=>health_val);
      }
  }

  return (
    <View style={styles.container}>
        <View style={styles.card} >
          <Text>{props.firstInputField}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeHeight}
                value={height}
                placeholder={props.firstInputField}
                keyboardType={props.keyboardType}
              />
          <Text>{props.secondInputField}</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeWeight}
              value={weight}
              placeholder={props.secondInputField}
              keyboardType={props.keyboardType}
            />
          </View>
          <Button title='GET RESULTS' onPress={HandlePress}></Button>
          <Text style={styles.text}>Your BMI Index is:{bmi}</Text>
          <Text style={styles.text}>{health}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:25,
        justifyContent:'center',
        alignItems: 'center',
        boxShadow: "10px 10px 17px -12px grey",
        height: '50%',
        width: '90%',
        justifyContent: 'center',
        alignItems:'center',
        margin: 10,
    },
    input:{
        height: 40,
        margin: 12,
        width: '60%',
        borderWidth: 1,
        padding: 10,
        backgroundColor:"white"
    },
    container:{
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems:'center',
      justifyContent: 'center',

    },
    text:{
      fontStyle: 'normal',
      fontSize:20,
      fontWeight: 'bold',
      color:'dodgerblue'
    },
    textred:{
      fontStyle: 'normal',
      fontSize:20,
      fontWeight: 'bold',
      color:'red'
    },
    textgreen:{
      fontStyle: 'normal',
      fontSize:20,
      fontWeight: 'bold',
      color:'green'
    },
    textyellow:{
      fontStyle: 'normal',
      fontSize:20,
      fontWeight: 'bold',
      color:'yellow'
    },
    
})

export default Card;
