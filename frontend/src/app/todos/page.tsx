"use client";
import getAllTodos from "@/lib/todos/getAllTodos";
import axios from "axios";
import Link from "next/link";

async function fetchPosts() {
  const response = await axios.get("http://localhost:3001/todos");
  console.log(response.data);

  return response.data;
}
export default async function Todos() {
  const data = await getAllTodos();

  return (
    <div>
      <h1>Posts 2</h1>
      <Link href="/todos/new">Cadastrar</Link>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
