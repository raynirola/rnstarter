import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BaseContainer from "../components/BaseContainer";

const OnboardingScreen = ({ setOnboarding }: { setOnboarding: (onboarding: boolean) => void }) => {
  return (
    <BaseContainer style={styles.container}>
      <View style={styles.container}>
        <Text>Onboarding Screen</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setOnboarding(false)}>
        <Text style={styles.label}>Done</Text>
      </TouchableOpacity>
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5,
  },
  label: {
    color: "white",
    fontWeight: "600",
  },
});

export default OnboardingScreen;
