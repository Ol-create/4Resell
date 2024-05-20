import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '../component/Screen'
import Card from '../component/Card'

listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require("../assets/couch.jpg")
    }
]

export default function ListingsScreen() {
  return (
      <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});