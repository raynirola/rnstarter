import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { User } from "../@types";
import BaseContainer from "../components/BaseContainer";

const LoginScreen = ({ login }: { login: (user: User) => void }) => {
  const user = { id: "1", name: "Ray Nirola", email: "test@gmail.com" };
  return (
    <BaseContainer style={styles.container}>
      <View style={styles.container}>
        <Text>Login Screen</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => login(user)}>
        <Text style={styles.label}>Login</Text>
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

export default LoginScreen;
