import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import BMI from '../screens/BMI'


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
           name="BMI" 
           component={BMI}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default HomeStack;

