import { useContext } from "react";
import { OnboardingContext } from "../contexts/OnboardingContext";

const useOnboarding = () => {
  return useContext(OnboardingContext);
};

export default useOnboarding;
