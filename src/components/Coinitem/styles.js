import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.3,
    borderBottomColor: "#282828",
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    backgroundColor: "#585858",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginRight: 5,
  },
});

export default styles;
