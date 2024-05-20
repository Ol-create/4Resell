import { StyleSheet, Text,} from 'react-native'
import React from 'react'

import defaultStyles from "../config/styles"


export default function AppText({children, style}) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  
    })