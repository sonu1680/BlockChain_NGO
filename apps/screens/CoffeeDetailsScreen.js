import "@walletconnect/react-native-compat";
import {
  WagmiConfig,
 useAccount

} from "wagmi";
import { sepolia,polygonZkEvmTestnet } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from "@web3modal/wagmi-react-native";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "8218314be0e1eb1290b8512a4a5ad62b";

// 2. Create config
const metadata = {
  name: "Web3Modal RN NFT Minting",
  description: "Web3Modal RN NFT Minting Tutorial",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [sepolia];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Linking,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import DonateBtn from "../components/donateBtn";
import Transcation from "../components/Transcation";
import History from "../config/fakehistory";
import MembersData from "../config/membersData";
import Members from "../components/Members";
import postData from "../config/PostData";
import Post from "../components/Post";
import axios from "axios";
import FundsCollect from "../components/FundsCollect";
const { height, width } = Dimensions.get("window");
const sizes = ["Funds","Donate", "Post", "Members", "Transcation"];

const CoffeeDetailsScreen = () => {
  const navigation=useNavigation()
  const { params } = useRoute();
  const coffee = params;
  const [activeSize, setActiveSize] = useState("Donate");

  //to fetch wallet transction history
  const [address, setAddress] = useState(
    "0x06d5a8b7193fe24daded4c0773e0f825c5cd85e7"
  );
  const [chain, setChain] = useState("11155111");
  const [history, setHistory] = useState(null);
  const [apiCall, setApicall] = useState(false);
  // setAddress(0x06d5A8b7193fE24DAdED4C0773e0F825C5Cd85E7)
  // setChain(11155111)


  async function fetchTxs() {
    try {
      let res = await axios.get(
        `https://w3-wallet-trx-history.vercel.app/api/txs`,
        {
          params: { address: address, chain: chain },
        }
      );

      
      setHistory(res.data.result);
    } catch (error) {
      console.log(error, "res");
    }
  }

  if (apiCall == false) {
    fetchTxs();
    setApicall(true);
  }
  useEffect(() => {
    return () => {
      setApicall(false);
    };
  }, []);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <View style={{ flex: 1, backgroundColor: colors.dark }}>
          <ScrollView>
            <SafeAreaView>
              <ImageBackground
                source={coffee.image}
                style={{
                  height: height / 2 + SPACING * 2,

                  justifyContent: "space-between",
                }}
                imageStyle={{
                  borderRadius: SPACING * 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: SPACING * 2,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.dark,
                      padding: SPACING,
                      borderRadius: SPACING * 1.5,
                    }}
                    onPress={()=> navigation.goBack()}
                  >
                    <Ionicons
                      name="arrow-back"
                      color={colors.light}
                      size={SPACING * 2}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.dark,
                     
                      borderRadius: SPACING * 2.5,
                    }}
                  >
                     <W3mButton />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    borderRadius: SPACING * 3,
                    overflow: "hidden",
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
                        }}
                      >
                        {coffee.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: SPACING * 1.8,
                          color: colors["white-smoke"],
                          fontWeight: "500",
                          marginBottom: SPACING,
                        }}
                      >
                        {coffee.included}
                      </Text>
                      <View
                        style={{ flexDirection: "row", marginTop: SPACING }}
                      >
                        <Ionicons
                          name="star"
                          size={SPACING * 1.5}
                          color={colors.primary}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING,
                          }}
                        >
                          {coffee.rating}
                        </Text>
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
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            padding: SPACING / 2,
                            width: SPACING * 5,
                            height: SPACING * 5,
                            backgroundColor: colors.dark,
                            borderRadius: SPACING,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Ionicons
                            name="earth"
                            size={SPACING * 2}
                            color={colors.primary}
                          />
                          <Text
                            style={{
                              color: colors["white-smoke"],
                              fontSize: SPACING,
                            }}
                          >
                            NGO
                          </Text>
                        </View>
                        <View
                          style={{
                            padding: SPACING / 2,
                            width: SPACING * 5,
                            height: SPACING * 5,
                            backgroundColor: colors.dark,
                            borderRadius: SPACING,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Ionicons
                            name="water"
                            size={SPACING * 2}
                            color={colors.primary}
                          />
                          <Text
                            style={{
                              color: colors["white-smoke"],
                              fontSize: SPACING,
                            }}
                          >
                            Support
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: colors.dark,
                          padding: SPACING / 2,
                          borderRadius: SPACING / 2,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                      
                       
                        <Text
                          style={{
                            color: colors["white-smoke"],
                            fontSize: SPACING * 1.3,
                          }}
                        >
                          Let's Make Tomorrow Better
                        </Text>
                      </View>
                    </View>
                  </BlurView>
                </View>
              </ImageBackground>

              <View
                style={{
                  padding: SPACING,
                }}
              >
               
                <Text
                  style={{
                    color: colors["white-smoke"],
                    fontSize: SPACING * 1.7,
                    marginBottom: SPACING,
                  }}
                >
                  Description
                </Text>
                <Text numberOfLines={3} style={{ color: colors.white }}>
                  {coffee.description}
                </Text>
                <View
                  style={{
                    marginVertical: SPACING * 2,
                  }}
                >
                  <Text
                    style={{
                      color: colors["white-smoke"],
                      fontSize: SPACING * 1.7,
                      marginBottom: SPACING,
                    }}
                  >
                    Size
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <ScrollView horizontal={true}>
                      {sizes.map((size, index) => (
                        <TouchableOpacity
                          onPress={() => setActiveSize(size)}
                          key={index}
                          style={[
                            {
                              borderWidth: 2,
                              paddingVertical: SPACING / 2,
                              borderRadius: SPACING,
                              backgroundColor: colors["dark-light"],
                              width: width / 3 - SPACING * 2,
                              alignItems: "center",
                            },
                            activeSize == size && {
                              borderColor: colors.primary,
                              backgroundColor: colors.dark,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              {
                                color: colors["white-smoke"],
                                fontSize: SPACING * 1.9,
                              },
                              activeSize === size && {
                                color: colors.primary,
                              },
                            ]}
                          >
                            {size}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>

                  {/*  NGO Events SECTIONS */}

                  {activeSize === "Donate" ? (
                    <DonateBtn />
                  ) : activeSize === "Post" ? (
                    postData.map((data, index) => (
                      <Post data={data} key={index} />
                    ))
                  ) : activeSize === "Transcation" ? (
                    history &&
                    history.result?.map((data, index) => (
                      <Transcation History={data} key={index} />
                    ))
                  ) : activeSize === "Members" ? (
                    MembersData.map((data, index) => (
                      <Members data={data} key={index} />
                    ))
                  ) : activeSize==="Funds"?(<FundsCollect></FundsCollect>):console.log("")
                
                  }

                  {/* END oF EVENT NGO */}
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </View>
        <Web3Modal />
      </WagmiConfig>
    </>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});
