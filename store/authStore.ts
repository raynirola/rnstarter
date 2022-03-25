import { User } from "../@types";

interface IState {
  user: User | null | undefined;
  loading: boolean;
  error: {
    message: string;
    code: number;
  } | null;
}

interface IAction {
  type: "LOGIN" | "LOGOUT" | "UPDATE_USER";
  payload?: User | null;
}

const initialState: IState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as authStoreReducer, initialState as authStoreInitialState };
