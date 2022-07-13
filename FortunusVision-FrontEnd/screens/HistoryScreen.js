import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
const HistoryScreen = () => {
  return (
    <View style={styles.image}>
      <ImageBackground
        source={require("../assets/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default HistoryScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
