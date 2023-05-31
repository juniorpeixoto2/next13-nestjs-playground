export default async function getAllTodos() {
  const res = await fetch(`${process.env.URL_API}/todos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
