import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'

import DISHES from 'assets/dishes'

//

function Dish({ route }) {
  const [dishes] = useState(DISHES)
  const { dishId } = route.params

  const dish = dishes[dishId]

  return (
    <View>
      <Card featuredTitle={dish.name} image={require(`../../${dish.image}`)}>
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    </View>
  )
}

export default Dish
