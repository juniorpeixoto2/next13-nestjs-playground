"use client";
import { api } from "@/services/api";
import { destroyCookie, setCookie } from "nookies";
import { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: any) => Promise<void>;
  signOut: () => {};
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  // useEffect(() => {
  // const { "app2.token": token } = parseCookies();
  // console.log(token);
  // if (isAuthenticated) {
  //   Router.push("/");
  // }
  // });

  async function signOut() {
    destroyCookie(null, "next.token");
  }

  async function signIn({ email, password }: SignInData) {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      const token = data.access_token;

      setCookie(undefined, "next.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser(user);
      return;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
