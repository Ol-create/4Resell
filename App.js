import React, { useState } from "react";
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert, TextInput } from 'react-native';
import { GestureHandlerRootView, } from "react-native-gesture-handler";
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
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/component/AppTextInput";

export default function App() {
 const [age, setAge] = useState(0)
  return (
    <GestureHandlerRootView>
      <Screen>
        <AppTextInput icon="email" placeholder="Enter your email"/>
        </Screen>
    </GestureHandlerRootView>
  );
}
  