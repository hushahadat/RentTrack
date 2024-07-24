"use client";
import { CardList } from "@/components/cards/Cards";
import { useRouter } from "next/navigation";
import React from "react";
const homeData = [
  {
    homeId: "BGS001",
    homeAddress: "Bagan Shahi",
    tenantName: "Sakil",
    tenantId: "11111",
    tenantPhoneNummber: "12121212",
  },
  {
    homeId: "BGS002",
    homeAddress: "Bagan Shahi",
    tenantName: "Hussain",
    tenantId: "222222",
    tenantPhoneNummber: "12121212",
  },
  {
    homeId: "BGS003",
    homeAddress: "Bagan Shahi",
    tenantName: "Arman",
    tenantId: "333333",
    tenantPhoneNummber: "12121212",
  },
];

const users = [
  {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    age: 30,
    email: "jane@example.com",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Johnson",
    age: 35,
    email: "michael@example.com",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Davis",
    age: 28,
    email: "emily@example.com",
    photo: "https://via.placeholder.com/150",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <React.Fragment>
      <h1 className="text-center text-3xl my-4">Dashboard</h1>
      <CardList users={homeData} />
    </React.Fragment>
  );
}
