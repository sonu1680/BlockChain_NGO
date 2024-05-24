import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  Alert, Modal, Pressable, 
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Wallet from "./Wallet";
import DonateBtn from "../components/donateBtn";

const avatar = require("../../assets/avatar.jpg");
const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const detailPage = (coffee) => {
    navigation.navigate("DetailsScreen", { ...coffee });
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>

{/* modal */}

<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello User!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>

{/* 
modal end */}

      <ScrollView
        style={{
          padding: SPACING,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: SPACING * 15,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING*5,
              justifyContent:'center',
              alignContent:'center',
              alignItems:'center',
            
            }}
          >
            <BlurView
              style={{
                height: "100%",
                // padding: SPACING / 2,
              }}
            >
             
            </BlurView>
          </View>
        </View>
        <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 3.5,
              fontWeight: "300",
            }}
          >
            Place Where NGO Meet's{" "}
            <Text style={{ fontWeight: "bold" }}>Transparency.</Text>
          </Text>
        </View>
        <SearchField />
        <Categories onChange={(id) => setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees
            .filter((coffee) => {
              if (activeCategoryId === null) {
                return true;
              }
              //console.log(coffee.categoryId === activeCategoryId);
              return coffee.categoryId === activeCategoryId;
            })
            .map((coffee) => (
              <View
                key={coffee.id}
                style={{
                  width: width / 2- SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                    onPress={() => detailPage(coffee)}
                  >
                    <Image
                      source={coffee.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SPACING * 2,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        borderTopEndRadius: SPACING * 2,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                        }}
                      >
                        <Ionicons
                          style={{
                            marginLeft: SPACING / 2,
                          }}
                          name="star"
                          color={colors.primary}
                          size={SPACING * 1.7}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING / 2,
                          }}
                        >
                          {coffee.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "600",
                      fontSize: SPACING * 1.7,
                      marginTop: SPACING,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: colors.secondary, fontSize: SPACING * 1.2 }}
                  >
                    {coffee.included}
                  </Text>
                  <View
                    style={{
                      marginVertical: SPACING / 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: colors.primary,
                          marginRight: SPACING / 2,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        Available ETH
                      </Text>
                      <Text
                        style={{ color: colors.white, fontSize: SPACING * 1.6 }}
                      >
                        {coffee.price}
                      </Text>
                    </View>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.dark,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
