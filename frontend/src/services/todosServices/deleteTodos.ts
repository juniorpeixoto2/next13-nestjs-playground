export default async function deleteTodos(id: string) {
  await fetch(`${process.env.URL_API}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) return response.json();

      const response_throw = await response.json();
      throw new Error(response_throw.message);
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
