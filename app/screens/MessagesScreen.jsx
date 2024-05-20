import { StyleSheet, Text, View, FlatList} from "react-native";
import React, {useState} from 'react';
import Constants from "expo-constants";

import ListItem from '../component/ListItem';
import ListSeperatorComponent from "../component/ListSeperatorComponent";
import Screen from "../component/Screen";
import ListItemDeleteAction from "../component/ListItemDeleteAction";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/paul.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/paul.png"),
  },
];

console.log(FlatList);

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)
  const handleDeleteMessage = (messageId) => {
    const messages = messages.filter(message => message.id !== messageId)
    setMessages(messages);
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected:", item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={<ListSeperatorComponent />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/paul.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    
  },
});