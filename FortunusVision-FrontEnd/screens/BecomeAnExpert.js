import React, { useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Input from "../components/Input";

const BecomeAnExpert = () => {
  const [inputVals, setInputVals] = useState({
    yearsOfExperience: "",
    phonePrice: "",
    Age: "",
    voicePrice: "",
  });

  function InputChangedHandlers(inputIdentifier, enteredValue) {
    setInputVals((currInput) => {
      return {
        ...currInput,
        [inputIdentifier]: enteredValue,
      };
    });
    console.log("inputVals");
    console.log(inputVals);
  }

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.flex}>
        <Input
          label={"Phone Call Price "}
          onChangeText={InputChangedHandlers.bind(this, "phonePrice")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
        <Input
          label={"Voice Message Price"}
          onChangeText={InputChangedHandlers.bind(this, "voicePrice")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
      </View>
      <View style={styles.flex}>
        <Input
          label={"Age "}
          onChangeText={InputChangedHandlers.bind(this, "Age")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
        <Input
          label={"Years Of Experience"}
          onChangeText={InputChangedHandlers.bind(this, "yearsOfExperience")}
          becomeAnExpert={{ keyboardType: "decimal-pad", maxLength: 2 }}
        />
      </View>
    </ImageBackground>
  );
};

export default BecomeAnExpert;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
