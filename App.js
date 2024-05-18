import React from "react";
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/component/AppText"
import AppButton from "./app/component/AppButton"
import Card from "./app/component/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/component/Screen";
import Icon from "./app/component/Icon";
import ListItem from "./app/component/ListItem";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem
          title="My title"
          subTitle="My subTitle"
          // image={require("./app/assets/mosh.jpg")}
          IconComponent={<Icon name="email"/>}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
  