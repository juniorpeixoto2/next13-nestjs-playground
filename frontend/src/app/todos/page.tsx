async function getData() {
  const res = await fetch("http://localhost:3001/todos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // console.log(res.json);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function about() {
  const data = await getData();

  return (
    <div>
      <h1>Todos: </h1>
      <div>
        {data.map((data: any) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </div>
    </div>
  );
}
