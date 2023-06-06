"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";
import React, { useContext } from "react";

const AppBar = () => {
  const router = useRouter();
  const { signOut } = useContext(AuthContext);
  async function handleSignOut() {
    await signOut();
    router.refresh();
    router.push("/");
    try {
    } catch (error) {}
  }

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
      <Link className="text-sky-600 hover:text-sky-700" href={"/"}>
        Home
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={"/login"}>
        Login
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href="/todos">
        Todos
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={"/client"}>
        Painel Cliente
      </Link>
      <button onClick={handleSignOut}>Sair</button>

      <div className="ml-auto flex gap-2">
        <p className="text-sky-600"> name</p>
      </div>
    </div>
  );
};

export default AppBar;
