import React from 'react'
import { NavHeaderStyles } from 'styles'

import Dish from 'components/Dish'
import Main from './components/Main'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const dishOptions = ({ route }) => ({ title: `Dish ${route.params.dishName}` })

//

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavHeaderStyles}>
        <Stack.Screen name='Main' component={Main} options={{ title: 'Main Menu' }} />

        <Stack.Screen name='Dish' component={Dish} options={dishOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
