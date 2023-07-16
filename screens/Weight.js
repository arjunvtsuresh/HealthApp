
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Card from '../components/Card'
function Weight() {
  return (
    <View>
      <ScrollView>
        <Card Imageuri='https://picsum.photos/200/300'/>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </View>
  )
}

export default Weight
