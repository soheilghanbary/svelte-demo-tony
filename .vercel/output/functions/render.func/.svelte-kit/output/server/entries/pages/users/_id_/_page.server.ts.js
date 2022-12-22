const load = async ({ params }) => {
  const fetchUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${params.id}`);
    const data = await response.json();
    return data;
  };
  return {
    user: fetchUser()
  };
};
export {
  load
};
