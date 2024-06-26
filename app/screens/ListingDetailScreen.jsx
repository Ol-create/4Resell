import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

import AppText from '../component/AppText'
import colors from '../config/colors'
import ListItem from '../component/ListItem'

export default function ListingDetailScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}> Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/paul.png")}
            title="Oluyemi Paul"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    detailContainer: {
       padding: 20
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24
    },
    userContainer: {
        marginVertical: 40,
    }
})