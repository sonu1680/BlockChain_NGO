import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import {sepolia} from "viem/chains";
import React from 'react';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from "@web3modal/wagmi-react-native";
import { StyleSheet,TextInput, Image, View } from "react-native";
import colors from "../config/colors";
import DonateBtn from "../components/donateBtn";

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


export default function Wallet() {

  return (
    <WagmiConfig config={wagmiConfig}>
         <View style={styles.container}>
        <W3mButton  />
         </View>
      <Web3Modal />
    </WagmiConfig>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        alignItems: "center",
        justifyContent: "center",
      },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:200
  },
});
