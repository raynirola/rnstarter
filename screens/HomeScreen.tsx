import { Text, StyleSheet, Pressable } from "react-native";
import BaseContainer from "../components/BaseContainer";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const { user, logout } = useAuth();
  return (
    <BaseContainer style={styles.container}>
      <Text style={styles.text}>Welcome {user?.name}.</Text>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </BaseContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
