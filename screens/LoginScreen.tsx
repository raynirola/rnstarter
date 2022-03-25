import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import BaseContainer from "../components/BaseContainer";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { login } = useAuth();
  return (
    <BaseContainer style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Pressable
        onPress={() =>
          login({
            id: 3,
            name: "Ray Nirola",
            email: "test@example.com",
          })
        }
      >
        <Text>Login</Text>
      </Pressable>
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default LoginScreen;
