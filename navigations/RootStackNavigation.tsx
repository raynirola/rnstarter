import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { FC } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useOnboarding } from "../contexts/OnboardingContext";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

const RootStackNavigation: FC = () => {
  const onboarding = useOnboarding();
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {onboarding ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : user ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export default RootStackNavigation;
