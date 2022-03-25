import { User } from "../@types";

interface IState {
  loading: boolean;
  onboarding: boolean;
}

interface IAction {
  type: "UPDATE";
  payload: boolean;
}

const initialState: IState = {
  loading: true,
  onboarding: true,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        onboarding: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { reducer as onboardingStoreReducer, initialState as onboardingStoreInitialState };
