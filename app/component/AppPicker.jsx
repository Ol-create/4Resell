import { Button, FlatList, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  placeholder,
  onSelectItem,
  selectItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons name={icon} size={30} />
          {selectItem ? (
            <AppText style={styles.text}>{selectItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
});
