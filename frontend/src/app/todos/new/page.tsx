"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import storeTodos from "@/services/todosServices/storeTodos";

export default function NewTodo() {
  // console.log("todos/new", new Date());

  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
      await storeTodos(formData);
      router.push("/todos");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h3>Novo To Do</h3>
      <div>
        <form onSubmit={handleForm} className="flex flex-col gap-2">
          <div>
            <label htmlFor="">Titulo</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleFormLogin(e, "title")}
            />
          </div>
          <div>
            <label htmlFor="">Descrição</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleFormLogin(e, "description")}
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
