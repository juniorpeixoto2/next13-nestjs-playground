"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import storeTodos from "@/services/todosServices/storeTodos";
import { AuthContext } from "@/contexts/authContext";

export default function NewTodo() {
  // console.log("todos/new", new Date());
  const context = useContext(AuthContext);

  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormLogin = (event: any, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event: any) => {
    event.preventDefault();

    try {
      const token = await context.signIn(formData);

      router.refresh();
      router.push("/client");
      console.log(token);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <section className="">
      <form onSubmit={handleForm} className="">
        <div className="flex justify-center w-screen items-center my-20">
          <div className="w-full md:w-1/2 flex flex-col items-center ">
            <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
              LOGIN
            </h1>
            <div className="w-3/4 mb-6">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFormLogin(e, "email")}
                name="email"
                id="email"
                required
                autoFocus
                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
                placeholder="E-mail"
              />
            </div>
            <div className="w-3/4 mb-6">
              <input
                name="password"
                value={formData.password}
                onChange={(e) => handleFormLogin(e, "password")}
                type="password"
                id="password"
                required
                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
                placeholder="Senha"
              />
            </div>
            <div className="w-3/4 flex flex-row justify-between">
              <div className=" flex items-center gap-x-1">
                <input
                  type="checkbox"
                  name="remember"
                  id=""
                  className=" w-4 h-4  "
                />
                <label className="text-sm text-slate-400">Remember me</label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-blue-500"
                >
                  Forgot?
                </a>
              </div>
            </div>
            <div className="w-3/4 mt-4">
              <div>{error && <p>{error}</p>}</div>
              <button
                type="submit"
                className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              >
                {" "}
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
