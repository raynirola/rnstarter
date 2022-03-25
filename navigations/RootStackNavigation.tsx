import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { FC } from "react";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const RootStackNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export default RootStackNavigation;
