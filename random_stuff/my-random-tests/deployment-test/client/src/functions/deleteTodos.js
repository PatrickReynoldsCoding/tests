export const deleteTodos = async (todo) => {
  try {
    const res = await fetch("http://localhost:8080/api/deleteAll", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {}
};
