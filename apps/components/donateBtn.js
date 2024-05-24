// import "@walletconnect/react-native-compat";
// import { WagmiConfig ,usePrepareSendTransaction,useSendTransaction} from "wagmi";
// import {sepolia} from "viem/chains";
// import {
//   createWeb3Modal,
//   defaultWagmiConfig,
//   Web3Modal,
//   W3mButton,

// } from "@web3modal/wagmi-react-native";

// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = "8218314be0e1eb1290b8512a4a5ad62b";

// // 2. Create config
// const metadata = {
//   name: "Web3Modal RN NFT Minting",
//   description: "Web3Modal RN NFT Minting Tutorial",
//   url: "https://web3modal.com",
//   icons: ["https://avatars.githubusercontent.com/u/37784886"],
//   redirect: {
//     native: "YOUR_APP_SCHEME://",
//     universal: "YOUR_APP_UNIVERSAL_LINK.com",
//   },
// };

// const chains = [sepolia];

// const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// // 3. Create modal
// createWeb3Modal({
//   projectId,
//   chains,
//   wagmiConfig,
// });



import { usePrepareSendTransaction, useSendTransaction,useContractRead,useAccount } from 'wagmi'

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TextInput,
} from "react-native";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { parseEther } from "viem";
const { height, width } = Dimensions.get("window");




export default function DonateBtn() {

  const [amount, setAmount] = useState("");
  const [text1, onChangeText1] = useState("");
 

  const account = useAccount()
  
//to initaion transcation

 
const{config}=usePrepareSendTransaction({
  account: '0x06d5A8b7193fE24DAdED4C0773e0F825C5Cd85E7',
  to: '0x06d5A8b7193fE24DAdED4C0773e0F825C5Cd85E9',
  value: parseEther(amount),
 })
  
  const { sendTransaction } = useSendTransaction(config)






const Donate=()=>{
  
  if(amount>0){
  
    sendTransaction?.()
     setAmount("")

  }
else{
  console.warn("Plz Enter Amount")
}


}
  return (
  <>


   
      <View>
       <SafeAreaView
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "1%",
        }}
      >
        <View
          style={{
            padding: SPACING,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: SPACING * 3,
          }}
        >
          <Text style={{ color: colors.white, fontSize: SPACING * 1.9 }}>
            Amount :{" "}
            <Text style={{ color: colors.primary, fontSize: SPACING * 2 }}>
              ETH
            </Text>
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            placeholder="Enter Amount"
            placeholderTextColor={colors.white}
          />
        </View>
        <TouchableOpacity
          style={{
            marginRight: SPACING,
            backgroundColor: colors.primary,
            width: width - SPACING * 2,
            height: SPACING * 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SPACING * 2,
          }}
          onPress={()=>Donate()}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 2,
              fontWeight: "700",
            }}
          >
            Donate Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View> 
    
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: SPACING * 5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: colors.white,
    fontSize: SPACING * 2,
    borderColor: colors.white,
    borderRadius: SPACING * 2,
    width: width - SPACING * 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING*2,
    textAlign:"center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
});
