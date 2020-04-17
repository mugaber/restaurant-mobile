import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import DISHES from 'assets/dishes'

//

function Menu() {
  const [dishes] = useState(DISHES)

  const navigation = useNavigation()

  const renderListItem = ({ index, item }) => (
    <ListItem
      key={index}
      title={item.name}
      subtitle={`${item.description.slice(0, 90)} ...`}
      leftAvatar={{ source: require(`../../${item.image}`) }}
      contentContainerStyle={{ marginLeft: '.5rem' }}
      onPress={() => {
        navigation.navigate('Dish', { dishId: item.id, dishName: item.name })
      }}
    />
  )

  return (
    <FlatList
      data={dishes}
      renderItem={renderListItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Menu
