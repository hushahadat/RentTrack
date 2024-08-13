"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  useEffect,
  useMemo,
} from "react";
import AppDataDummy from "@/static/data";

export interface IAppContextProps {
  appInfo: any; // Replace `any` with your specific state type
  setAppInfo?: Dispatch<any>;
  userData: any; // Replace `any` with your specific state type
  setUserData: any;
}

export const AppContext = createContext<IAppContextProps | null>(null);

export interface MyProviderProps {
  children: ReactNode;
  auth: any;
}

export const AppDataProvider = ({ children, auth }: MyProviderProps) => {
  const [userData, setUserData] = useState<any>(auth); // Replace `any` with your specific state type

  const appInfo = useMemo(() => {
    return AppDataDummy
  }, [userData]);

  const value = { appInfo, userData, setUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
