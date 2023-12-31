import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import BMI from '../screens/BMI'
import Mindfullness from '../screens/Mindfullness';
import Yoga from '../screens/Yoga';
import Weight from '../screens/Weight';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
      <NavigationContainer style={styles.navigator}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Health'}}
          />
          <Stack.Screen
           name="BMI" 
           component={BMI}
          />
          <Stack.Screen
            name='Yoga'
            component={Yoga}
          />
          <Stack.Screen
            name='Mindfullness'
            component={Mindfullness}
          />
          <Stack.Screen
            name='Weight'
            component={Weight}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  navigator:{
    backgroundColor:'black',
    color: 'black',
  }
})


export default HomeStack;

