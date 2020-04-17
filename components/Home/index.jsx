import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, ScrollView, Text } from 'react-native'

import DISHES from 'assets/dishes'
import LEADERS from 'assets/leaders'
import PROMOTIONS from 'assets/promotions'

//

function Home() {
  const [assets] = useState({
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
  })
  const { dishes, leaders, promotions } = assets

  const CardItem = ({ item }) => (
    <Card
      featuredTitle={item.name}
      featuredSubtitle={item.designation}
      image={require(`../../${item.image}`)}
    >
      <Text>{item.description}</Text>
    </Card>
  )

  const getItem = (collection) => collection.filter((item) => item.featured)[0]

  return (
    <ScrollView>
      <CardItem item={getItem(dishes)} />
      <CardItem item={getItem(leaders)} />
      <CardItem item={getItem(promotions)} />
    </ScrollView>
  )
}

export default Home
