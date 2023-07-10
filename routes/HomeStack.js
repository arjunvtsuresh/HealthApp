import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import BMI from '../screens/BMI'
import Mindfullness from '../screens/Mindfullness';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
      <NavigationContainer>
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
            name='Mindfullness'
            component={Mindfullness}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}


export default HomeStack;

