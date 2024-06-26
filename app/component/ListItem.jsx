import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import AppText from './AppText';
import colors from '../config/colors';


export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable style={styles.container} renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <View style={styles.userContainer}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={{ marginLeft: 10 }}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={30} style={{ color: colors.medium }} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    border: 20,
    backgroundColor: "white",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
  userContainer: {
    marginLeft: 10,
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
});