import { ReactNode, createContext, useContext } from "react";

const initialState = {
  isAuthenticated: false,
};

const AuthContext = createContext({});
interface IProp {
  children: ReactNode;
}
export function AuthProvider(props: IProp) {
  const { children } = props;
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
