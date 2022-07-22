import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const SubmitButt = () => {
  return (
    <View style={styles.Container}>
      <Pressable
        style={styles.rootContainer}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default SubmitButt;
const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 0,
    backgroundColor: Colors.primary500,
    height: 50,
    width: "50%",
    borderRadius: 10,
    textAlign: "center",
  },
  Container: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 25,
  },
  text: {
    color: "white",
  },
});
