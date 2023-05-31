export default async function ({}) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  console.log(new Date());

  return <div>ok{JSON.stringify(data.json())}</div>;
}
