import { FC, useEffect, useContext, createContext, useState } from "react";
import type { User } from "../@types";
import SplashScreen from "../screens/SplashScreen";

interface IAuthContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);

  const logout = () => setUser(null);

  useEffect(() => {
    setUser(() => ({ id: 1, name: "John Doe", email: "test@example.com" }));
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <SplashScreen />;

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
