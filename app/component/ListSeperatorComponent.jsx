import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function ListSeperatorComponent() {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
    separator: {  height: 4, width: "100%", backgroundColor: "#000", }
})