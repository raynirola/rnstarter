import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./contexts/AuthContext";
import { OnboardingContextProvider } from "./contexts/OnboardingContext";
import RootStackNavigation from "./navigations/RootStackNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <OnboardingContextProvider>
        <AuthContextProvider>
          <NavigationContainer>
            <RootStackNavigation />
          </NavigationContainer>
        </AuthContextProvider>
      </OnboardingContextProvider>
    </SafeAreaProvider>
  );
}
