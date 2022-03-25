import { FC, useEffect, createContext, useReducer } from "react";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import { onboardingStoreInitialState, onboardingStoreReducer } from "../store/onboardingStore";

export const OnboardingContext = createContext<boolean>(true);

const OnboardingContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(onboardingStoreReducer, onboardingStoreInitialState);

  const setOnboarding = (value: boolean) => dispatch({ type: "UPDATE", payload: value });

  useEffect(() => {
    // TODO: Check if the app is first time opened
    setTimeout(() => setOnboarding(true), 2000);
  }, []);

  if (state.loading) return <SplashScreen />;

  return (
    <OnboardingContext.Provider value={state.onboarding}>
      {state.onboarding ? <OnboardingScreen setOnboarding={setOnboarding} /> : children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingContextProvider;
