export default async function updateTodos(id: string, data: any) {
  await fetch(`${process.env.URL_API}/todos/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
