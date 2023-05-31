export default async function getAllTodos() {
  // console.log(process.env.URL_API);

  const res = await fetch(`${process.env.URL_API}/todos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // console.log(res.json());

  return res.json();
}
