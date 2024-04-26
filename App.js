import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/component/AppText"
import AppButton from "./app/component/AppButton"

export default function App() {
  function handlePress() {
    console.log("Text Clicked!")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<AppButton title="Login" onPress={() => console.log('Click!')}/>
    </View>
  );
}
