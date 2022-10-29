import { createContext, useContext, useMemo, useState } from "react";

const initialState = {
  randomUsersList: { isLoading: false, data: [], error: "" },
};
const RandomUsersContext = createContext(initialState);

export const useRandomUsersContext = () => useContext(RandomUsersContext);

export const RandomUsersProvider = ({ children }) => {
  const [randomUsersList, setRandomUsersList] = useState(
    initialState.randomUsersList
  );

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
