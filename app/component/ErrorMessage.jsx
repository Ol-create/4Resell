import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from './AppText'

export default function ErrorMessage({ error }) {
    if (!error)
        return null;
  return (
    <AppText style={{color: "red"}}>
      {error}
    </AppText>
  )
}

const styles = StyleSheet.create({})