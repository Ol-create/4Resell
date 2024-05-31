import { StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from "../config/styles"


export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={30} />
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={[defaultStyles.text, styles.textInput]} {...otherProps} />
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
        paddingHorizontal: 10,
    }
});