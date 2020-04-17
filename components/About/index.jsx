import React from 'react'
import LEADERS from 'assets/leaders'
import { ScrollView, FlatList, Text } from 'react-native'
import { Card, ListItem } from 'react-native-elements'

//

function About() {
  const renderListItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{ source: require(`../../${item.image}`) }}
      contentContainerStyle={{ marginLeft: 10 }}
    />
  )

  return (
    <ScrollView>
      <Card featuredTitle='Our History'>
        <Text>
          Started in 2010, Ristorante con Fusion quickly established itself as a culinary
          icon par excellence in Hong Kong. With its unique brand of world fusion cuisine
          that can be found nowhere else, it enjoys patronage from the A-list clientele in
          Hong Kong. Featuring four of the best three-star Michelin chefs in the world,
          you never know what will arrive on your plate the next time you visit us.
        </Text>
        <br />
        <Text>
          The restaurant traces its humble beginnings to The Frying Pan, a successful
          chain started by our CEO, Mr. Peter Pan, that featured for the first time the
          world's best cuisines in a pan.
        </Text>
      </Card>

      <Card title='Corporate Leadership'>
        <FlatList
          data={LEADERS}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </ScrollView>
  )
}

export default About
