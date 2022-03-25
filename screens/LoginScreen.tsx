import { Text, StyleSheet } from "react-native";
import BaseContainer from "../components/BaseContainer";

const LoginScreen = () => {
  return (
    <BaseContainer style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
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
