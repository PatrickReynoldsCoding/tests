export const getData = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/");
    console.log("pulling todos");
    return await res.json();
  } catch (err) {}
};
