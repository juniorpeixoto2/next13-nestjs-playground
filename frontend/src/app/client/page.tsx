"use client";
import { api } from "@/services/api";
import { useEffect } from "react";

export default function Client() {
  useEffect(() => {
    // console.log("Client");
    // api.get("/todos").then((response) => {
    //   console.log(response.data);
    // });
  });

  return <div>Client Panel</div>;
}
