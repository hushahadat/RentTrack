"use client";
import { createContext, useState, ReactNode, FC, useContext, Dispatch } from "react";
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

  const Value = {appInfo, setState}

  return (
    <AppContext.Provider value={Value}>
      {children}
    </AppContext.Provider>
  );
};

// export const useAppContext = () => useContext(AppContext);

export const useAppContext = (): IAppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    console.log("++++++++++++++++++++++++++++++++++++++");

    throw new Error("useAppContext must be used within an AppDataProvider");
  }
  return context;
};
