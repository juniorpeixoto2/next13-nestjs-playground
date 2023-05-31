"use client";
import getAllTodos from "@/lib/todos/getAllTodos";
import Link from "next/link";
export default async function Todos() {
  const todos = await getAllTodos();

  return (
    <div>
      <div className="flex flex-row justify-between ">
        <h1>Posts 2</h1>
        <Link
          className="border bg-blue-300 p-2 rounded shadow-sm"
          href="/todos/new"
        >
          Cadastrar
        </Link>
      </div>
      <div className="w-full">
        <table className="w-full border-collapse border border-slate-400">
          <thead>
            <tr className="border-collapse border border-slate-400">
              <th>ID</th>
              <th>Título</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo: any) => (
              <tr
                className="border-collapse border border-slate-400"
                key={todo.id}
              >
                <td className="border border-slate-400">{todo.id}</td>
                <td className="border border-slate-400">{todo.title}</td>
                <td className="border border-slate-400">{todo.description}</td>
                <td>
                  <Link
                    className="border bg-blue-300 p-1 rounded"
                    href={`/todos/edit/${todo.id}`}
                  >
                    Editar
                  </Link>
                  <Link
                    className="border bg-blue-300 p-1 rounded "
                    href={`/todos/edit/${todo.id}`}
                  >
                    Deletar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul></ul>
    </div>
  );
}
