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

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <Icon
          name="email"
          size={50}
          backgroundColor="red"
        iconColor="white"/>
     </Screen>
    </GestureHandlerRootView>
  );
}
  