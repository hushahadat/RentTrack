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
import { getAppdata } from "@/utils/api_call";

export interface IAppContextProps {
  appInfo: any; // Replace `any` with your specific state type
  loading: boolean;
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
  const [appInfo, setAppInfo] = useState<any>([]); // Replace `any` with your specific state type
  const [loading, setLoading] = useState(false);

  const getDataa = async () => {
    try {
      const data = await getAppdata({
        userId: userData.id,
        roleId: userData.role_id,
        auth_token: userData.auth_token,
      });
      if (data.status === "success") {
        setAppInfo(data.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error ==++++++", e);
    }
  };

  useEffect(() => {
    if (userData) {
      setLoading(true);
      getDataa();
    }
  }, [userData]);

  const value = { appInfo, userData, setUserData, loading };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
