import { FC, useEffect, useContext, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "../screens/SplashScreen";

const OnboardingContext = createContext<boolean>(true);

const OnboardingContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [onboarding, setOnboarding] = useState(true);

  useEffect(() => {
    (async () => {
      const onboardingState = await AsyncStorage.getItem("lol");
      if (onboardingState !== null) {
        setOnboarding(JSON.parse(onboardingState));
        setLoading(false);
      } else {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <SplashScreen />;

  return <OnboardingContext.Provider value={onboarding}>{children}</OnboardingContext.Provider>;
};

const useOnboarding = () => useContext(OnboardingContext);

export { OnboardingContextProvider, useOnboarding };
