import axios from "axios";

export const getUsersData = async () => {
  const count = "50";
  const url = `https://randomuser.me/api/?results=${count}`;
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch {
    console.log("error getting pokemons");
  }
};
