import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import AppText from './AppText'
import colors from '../config/colors';

export default function Card({title, subTitle, image}) {
  return (
    <View
      style={{
        overflow: "hidden",
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: 250,
          borderRadius: 10,
        }}
      />
      <AppText style={styles.textStyle}>{title}</AppText>
      <AppText style={[styles.textStyle, styles.subText]}>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
    textStyle: {
        paddingTop: 7,
        fontWeight: "medium"
    },
    subText: {
        color: colors.secondary
    }
})