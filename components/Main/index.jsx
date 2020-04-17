import React from 'react'
import { View, Platform } from 'react-native'

import Menu from 'components/Menu'

//

function Main() {
  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 1 }}>
      <Menu />
    </View>
  )
}

export default Main
