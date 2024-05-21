import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Screen from "./Screen";

export default function AppPicker({ icon, ...otherProps }) {
   const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons name={icon} size={30} />
          <AppText style={styles.text}></AppText>
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Screen>
        <Modal visible={modalVisible} animationType="slide">
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
        </Modal>
      </Screen>
    </>
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
    },
    text: {
      flex: 1
  }
});
