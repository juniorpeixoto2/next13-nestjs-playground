import axios from "axios";

export default async function getByIdTodos(id: string) {
  const res = await axios.get(`${process.env.URL_API}/todos/${id}`);

  return res.data;
}
