import React from 'react'

import Home from 'components/Home'
import Main from './components/Main'
import About from 'components/About'
import Contact from 'components/Contact'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

//

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='About Us' component={About} />
        <Drawer.Screen name='Menu' component={Main} />
        <Drawer.Screen name='Contact Us' component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
