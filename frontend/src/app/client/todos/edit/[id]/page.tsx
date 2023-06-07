"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import updateTodos from "@/services/todosServices/updateTodos";
import getByIdTodos from "@/services/todosServices/getByIdTodos";

export default function EditTodo({ params }: any) {
  const router = useRouter();
  const todoId = params.id;

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const todo = await getByIdTodos(todoId);

      setFormData({
        title: todo.title,
        description: todo.description,
      });
    };

    fetchData().catch(console.error);
  }, []);

  const handleFormLogin = (event: any, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event: any) => {
    event.preventDefault();

    try {
      await updateTodos(todoId, formData);
      router.push("/client/todos");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Users {params.id}</h1>
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
            <input type="submit" value="Alterar" />
          </div>
        </form>
      </div>
    </div>
  );
}
