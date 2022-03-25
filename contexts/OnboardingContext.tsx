import { FC, useEffect, createContext, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

export const OnboardingContext = createContext<boolean>(true);

const OnboardingContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [onboarding, setOnboarding] = useState(true);

  useEffect(() => {
    // TODO: Check if the app is first time opened
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <OnboardingContext.Provider value={onboarding}>
      {onboarding ? <OnboardingScreen setOnboarding={setOnboarding} /> : children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingContextProvider;
