import React from 'react'
import { Text, Button, View } from 'react-native'

export default function SzabalyHome({navigation}) {
  return (
    <View>
    <Text>SzabalyHome</Text>
    <Button onPress={()=>navigation.navigate('A lehetőség')} title="A lehetőség"/>
    <Button onPress={()=>navigation.navigate('B lehetőség')} title="B lehetőség"/>
    </View>
  )
}
