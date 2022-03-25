import { FC, useEffect, createContext, useReducer } from "react";
import type { User } from "../@types";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import { authStoreInitialState, authStoreReducer } from "../store/authStore";

interface IAuthContext {
  user: User | null | undefined;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authStoreReducer, authStoreInitialState);

  const login = (user: User) => dispatch({ type: "LOGIN", payload: user });

  const logout = () => dispatch({ type: "LOGOUT" });

  useEffect(() => {
    // TODO: fetch user from API
    setTimeout(() => login({ id: 1, name: "John Doe", email: "raynirola@gmail.com" }), 2000);
  }, []);

  if (state.loading) return <SplashScreen />;

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {state.user ? children : <LoginScreen login={login} />}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
