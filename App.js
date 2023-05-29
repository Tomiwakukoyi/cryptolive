import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CoinDetails from "./src/screens/coinDetailsScreens/CoinDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CoinDetails />
      <StatusBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
