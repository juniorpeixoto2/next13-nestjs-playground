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
    <div>
      <h3>Entrar</h3>
      <div>
        <form onSubmit={handleForm} className="flex flex-col gap-2">
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              required
              value={formData.email}
              onChange={(e) => handleFormLogin(e, "email")}
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleFormLogin(e, "password")}
            />
          </div>
          <div>{error && <p>{error}</p>}</div>

          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    </div>
  );
}
