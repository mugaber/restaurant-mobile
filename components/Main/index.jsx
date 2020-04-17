import React from 'react'
import { NavHeaderStyles } from 'styles'
import { View, Platform } from 'react-native'

import Dish from 'components/Dish'
import Menu from 'components/Menu'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const dishOptions = ({ route }) => ({ title: `Dish ${route.params.dishName}` })

//

function Main() {
  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 1 }}>
      <Stack.Navigator screenOptions={NavHeaderStyles}>
        <Stack.Screen name='Menu' component={Menu} options={{ title: 'Menu' }} />
        <Stack.Screen name='Dish' component={Dish} options={dishOptions} />
      </Stack.Navigator>
    </View>
  )
}

export default Main
