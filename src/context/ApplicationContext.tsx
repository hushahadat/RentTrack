"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  useEffect,
} from "react";
import AppDataDummy from "@/static/data";

export interface IAppContextProps {
  appInfo: any; // Replace `any` with your specific state type
  setAppInfo: Dispatch<any>;
  userData: any; // Replace `any` with your specific state type
  setUserData: any;
}

export const AppContext = createContext<IAppContextProps | null>(null);

export interface MyProviderProps {
  children: ReactNode;
}

export const AppDataProvider = ({ children }: MyProviderProps) => {
  const [appInfo, setAppInfo] = useState<any>(AppDataDummy); // Replace `any` with your specific state type
  const [userData, setUserData] = useState<any>({}); // Replace `any` with your specific state type
  useEffect(() => {
    const userData = localStorage.getItem("__user__");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  const value = { appInfo, setAppInfo, userData, setUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
