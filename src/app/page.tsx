"use client";
import { CardList } from "@/components/cards/Cards";
import React from "react";

export default function Home() {

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl my-4">Dashboard</h1>
      <CardList />
    </React.Fragment>
  );
}
