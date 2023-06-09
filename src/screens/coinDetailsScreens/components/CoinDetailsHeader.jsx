import React from "react";
import { View, Image, Text } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Coin from "../../../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetailsHeader = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" color="white" size={30} />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: small }} style={{ width: 30, height: 30 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" color="white" size={30} />
    </View>
  );
};

export default CoinDetailsHeader;
