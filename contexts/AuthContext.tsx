import { FC, useEffect, createContext, useState } from "react";
import type { User } from "../@types";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";

interface IAuthContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);

  const logout = () => setUser(null);

  useEffect(() => {
    // TODO: fetch user from API
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {user ? children : <LoginScreen login={login} />}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
