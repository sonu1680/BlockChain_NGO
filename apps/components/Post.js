import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

export default function Post({ data }) {

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
              fontSize: SPACING * 1.3,
              color: colors.white,
              fontWeight: "600",
              marginBottom: SPACING,
            }}
          >
            Topic: {data.topic}
          </Text>
          <Text
            style={{
              fontSize: SPACING * 1.3,
              color: colors.white,
              fontWeight: "500",
              marginBottom: SPACING,
            }}
          >
            {" "}
            Date: {data.date}
            {/* Location: {data.location} */}
          </Text>
          <Text
            style={{
              fontSize: SPACING * 1.3,
              color: colors.white,
              fontWeight: "500",
              marginBottom: SPACING,
            }}
          >
            {/* Date: {data.date} */}
          </Text>

          <TouchableOpacity onPress={() => fetchTxs()}>
            <View
              style={{
                padding: SPACING / 2,
                width: SPACING * 12,
                height: SPACING * 4,
                backgroundColor: "green",
                borderRadius: SPACING,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: SPACING * 1.3,
                }}
              >
                Need Help
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "35%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                padding: SPACING / 2,
                width: SPACING * 12,
                height: SPACING * 5,
                backgroundColor: colors.dark,
                borderRadius: SPACING,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="location-outline"
                color={colors.light}
                size={SPACING * 2}
              />
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: SPACING * 1.4,
                  fontWeight: 800,
                }}
              >
                {data.location}
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: SPACING / 2,
              width: SPACING * 12,
              height: SPACING * 5,
              backgroundColor: colors.dark,
              borderRadius: SPACING,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Ionicons name="heart" color="red" size={SPACING * 2} />
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: SPACING * 1.6,
                marginLeft:SPACING*0.5
              }}
            >
              {data.like}
            </Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
}
