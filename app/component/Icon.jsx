import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor="white" }) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: size/2
      }}>
            <MaterialCommunityIcons name={name}
                size={size*0.75}
                color={iconColor} />
      </View>
    );
}

const styles = StyleSheet.create({})