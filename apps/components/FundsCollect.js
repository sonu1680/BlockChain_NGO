import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

export default function FundsCollect() {

  return (
    <View
      style={{
        borderRadius: SPACING * 3,
        overflow: "hidden",
        backgroundColor: colors["dark-light"],
        marginTop: SPACING,
      }}
    >
      <BlurView
        intensity={80}
        tint="dark"
        style={{
          padding: SPACING * 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: SPACING * 2,
              color: colors.white,
              fontWeight: "600",
              marginBottom: SPACING,
              textAlign:'center'
            }}
          >
            Funds Collected: 1.832 ETH
          </Text>
          
          <Text
            style={{
              fontSize: SPACING * 1.3,
              color: colors.white,
              fontWeight: "500",
              marginBottom: SPACING,
            }}
          >
          </Text>

         
       
        </View>
      </BlurView>
    </View>
  );
}
