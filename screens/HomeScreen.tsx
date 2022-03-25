import { Text, StyleSheet } from "react-native";
import BaseContainer from "../components/BaseContainer";

const HomeScreen = () => {
  return (
    <BaseContainer style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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
