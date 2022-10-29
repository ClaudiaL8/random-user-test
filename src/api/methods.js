import axios from "axios";

export const getUsersData = async (count) => {
  const url = `https://randomuser.me/api/?results=${count}`;
  try {
    const data = await axios.get(url);
    const mappedUsers = data.data.results.map((user, i) => ({
      name: user.name.first,
      city: user.location.city,
      email: user.email,
      cell: user.cell,
      id: i,
    }));
    localStorage.setItem("randomUsersData", JSON.stringify(mappedUsers));
    return mappedUsers;
  } catch {
    console.log("error getting random users");
  }
};
