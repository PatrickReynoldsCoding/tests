export const updateChecked = async (todoId) => {
  try {
    const res = await fetch(`http://localhost:8080/api/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {}
};
