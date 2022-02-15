import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
const App = () => {
  Alert.alert("Danger", "Your storage is running out", [
    { text: "Okay", style: "default" },
  ]);
  return (
    <View style={styles.div}>
      <Text style={styles.p}>App</Text>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  p: {
    fontSize: 28,
    color: "#ffffff",
    fontStyle: "italic",
  },
});
