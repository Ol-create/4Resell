import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';


export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
          <MaterialCommunityIcons
                                 name={icon} size={30}/>
          <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
    borderRadius: 30,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    paddingVertical: 5,
    paddingHorizontal: 10, 
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: colors.dark,
        fontFamily: Platform.OS == "android"? "Roboto" : "Avenir"
    }
});