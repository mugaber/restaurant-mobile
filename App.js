import React from 'react'

import Home from 'components/Home'
import Main from './components/Main'
import About from 'components/About'
import Contact from 'components/Contact'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

//

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>

        <Drawer.Screen name='About Us'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='About Us' component={About} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>

        <Drawer.Screen name='Menu'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='Menu' component={Main} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>

        <Drawer.Screen name='Contact Us'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='Contact Us' component={Contact} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
