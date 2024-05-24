import React, { useState } from "react";
import { View, Text,TouchableOpacity } from "react-native";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { BlurView } from "expo-blur";

export default function Members({data}) {
  

  return (
 
  
      <View
        style={{
          borderRadius: SPACING * 3,
          overflow: "hidden",
          backgroundColor: colors["dark-light"],
          marginTop:SPACING,
          
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
              Name:{data.Name}
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.3,
                color: colors.white,
                fontWeight: "500",
                marginBottom: SPACING,
              }}
            >
              Wallet Addrees: 
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.3,
                color: colors.white,
                fontWeight: "500",
                marginBottom: SPACING,
              }}
            >
              {data.address}
            </Text>

            <TouchableOpacity onPress={()=>fetchTxs()} >
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
                Chat with {data.Name}
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
                }}
              >
                <Text
                  style={{
                    color: colors["white-smoke"],
                    fontSize: SPACING*1.2,
                  }}
                >
                  Member since : {data.time}Y
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
              }}
            >
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: SPACING * 1.3,
                }}
              >
                Donated $: {data.donated}
              </Text>
            </View>
          </View>
        </BlurView>
      </View>
    
  );
}
