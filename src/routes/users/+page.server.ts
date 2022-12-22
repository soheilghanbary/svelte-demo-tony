import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data.users;
  };
  return {
    users: fetchUsers(),
  };
};
