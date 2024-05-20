import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import Screen from '../component/Screen'
import ListItem from '../component/ListItem'
import Icon from '../component/Icon'
import ListSeparatorComponent from '../component/ListSeperatorComponent'

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary

        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary

        },
    },
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Oluyemi Paul"
          subTitle="oluola96@gmail.com"
          image={require("../assets/paul.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={<ListSeparatorComponent />}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
          </View>
          <ListItem
              title="Log out"
              IconComponent={<Icon
                  name="logout"
                  backgroundColor='#ffe66d'/>} />
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    },
    screen: {
        backgroundColor: colors.light
    }

})