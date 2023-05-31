import axios from "axios";

export default async function getById(id: string) {
  const res = await axios.get(`http://localhost:3001/${id}`);

  console.log(res.data);

  // const res = await fetch(`http://localhost:3001/${id}`, { cache: "no-store" });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // console.log(res.json());

  // return res.json();
}
