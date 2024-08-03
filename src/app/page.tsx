"use client";
import { CardList } from "@/components/cards/Cards";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const { appInfo } = useAppContext();

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl my-4">Dashboard</h1>
      <CardList users={appInfo} />
    </React.Fragment>
  );
}
