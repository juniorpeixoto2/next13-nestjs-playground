import { api } from "../api";

export default async function getAllTodos() {
  try {
    const { data } = await api.get("todos");
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
