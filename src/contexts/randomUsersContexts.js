import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { getUsersData } from "../api/index";

const initialState = {
  randomUsersList: { isLoading: false, data: [], error: "" },
};
const RandomUsersContext = createContext(initialState);

export const useRandomUsersContext = () => useContext(RandomUsersContext);

export const RandomUsersContextProvider = ({ children }) => {
  const [randomUsersList, setRandomUsersList] = useState(
    initialState.randomUsersList
  );

  const fetchPokemonList = async () => {
    setRandomUsersList({ ...initialState.randomUsersList, isLoading: true });
    try {
      const data = await getUsersData();
      setRandomUsersList({ isLoading: false, data: data });
    } catch (err) {
      setRandomUsersList({ isLoading: false, error: err });
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const state = useMemo(
    () => ({
      randomUsersList,
    }),
    [randomUsersList]
  );

  return (
    <RandomUsersContext.Provider value={state}>
      {children}
    </RandomUsersContext.Provider>
  );
};

export default RandomUsersContext;
