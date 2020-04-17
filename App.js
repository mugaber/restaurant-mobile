import React from 'react'

import Home from 'components/Home'
import Main from './components/Main'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

//

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Main' component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
