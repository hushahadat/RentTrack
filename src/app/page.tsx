"use client";
import { CardList } from "@/components/cards/Cards";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/ApplicationContext";

export default function Home() {
  const router = useRouter();
  const { loading, userData } = useAppContext() || {};
  useEffect(() => {
    if (!userData && !loading) {
      router.push("/auth/sign-in");
    }
  });

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl my-4">Dashboard</h1>
      <CardList />
    </React.Fragment>
  );
}
