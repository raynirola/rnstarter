import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import BaseContainer from "../components/BaseContainer";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const { user, logout } = useAuth();
  return (
    <BaseContainer style={styles.container} optins={{ bounceBackgroundColor: "purple" }}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome {user?.name}.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.label}>Logout</Text>
      </TouchableOpacity>
    </BaseContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
  label: {
    color: "purple",
    fontWeight: "600",
  },
});
