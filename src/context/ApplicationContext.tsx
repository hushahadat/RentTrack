"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
} from "react";
import AppDataDummy from "@/static/data";

export interface IAppContextProps {
  appInfo: any; // Replace `any` with your specific state type
  setState: Dispatch<any>;
}

export const AppContext = createContext<IAppContextProps | null>(null);

export interface MyProviderProps {
  children: ReactNode;
}

export const AppDataProvider = ({ children }: MyProviderProps) => {
  const [appInfo, setState] = useState<any>(AppDataDummy); // Replace `any` with your specific state type

  const value = { appInfo, setState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

