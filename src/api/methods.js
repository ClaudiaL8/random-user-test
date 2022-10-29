import axios from "axios";

const getRandomUsers = async () => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/?results=5000");
    console.log({ data });
  } catch (err) {
    console.log("error getring number of pokemons");
  }
};
