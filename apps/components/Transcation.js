import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { BlurView } from "expo-blur";


export default function Transcation({ History }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        borderRadius: SPACING * 3,
        overflow: "hidden",
        backgroundColor: colors["dark-light"],
        marginTop: SPACING,
      }}
    >
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Query Sucessfully Raise</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

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
              fontSize: SPACING * 1.2,
              color: colors.white,
              fontWeight: "600",
              marginBottom: SPACING,
            }}
          >
            FROM:{History.from_address}
          </Text>
          <Text
            style={{
              fontSize: SPACING * 1.2,
              color: colors.white,
              fontWeight: "500",
              marginBottom: SPACING,
            }}
          >
            TO: {History.to_address}
          </Text>
          <Text
            style={{
              fontSize: SPACING * 1.2,
              color: colors.white,
              fontWeight: "500",
              marginBottom: SPACING,
            }}
          >
            Hash Id: {History.hash}
          </Text>

          <Text
            style={{
              fontSize: SPACING * 1.2,
              color: colors.white,
              fontWeight: "500",
              marginBottom: SPACING,
            }}
          >
            Block TimeStamp: {History.block_timestamp}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View
                style={{
                  padding: SPACING / 2,
                  width: SPACING * 9,
                  height: SPACING * 5,
                  backgroundColor: "red",
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
                  Raise Query
                </Text>
              </View>
            </TouchableOpacity>

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
                  color: "white",
                  fontSize: SPACING,
                  fontWeight:500
                }}
              >
                Amount ETH: {History.value / 1e18}
              </Text>
            </View>
<TouchableOpacity onPress={()=>Linking.openURL(`https://sepolia.etherscan.io/tx/${History.hash}`)} >

            <View
                style={{
                  padding: SPACING / 2,
                  width: "auto",
                  height: SPACING * 5,
                  backgroundColor: colors.dark,
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
                  More Details
                </Text>
              </View>
                  </TouchableOpacity>

          </View>
        </View>
        <View
          style={{
            width: "35%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          ></View>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
 
  buttonClose: {
    backgroundColor: "#2196F3",
    paddingLeft:20,
    paddingRight:20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
