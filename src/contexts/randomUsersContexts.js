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

  const fetchRandomUsersList = async (count) => {
    setRandomUsersList({ ...initialState.randomUsersList, isLoading: true });
    try {
      const data = await getUsersData(count);
      setRandomUsersList({ isLoading: false, data: data });
    } catch (err) {
      setRandomUsersList({ isLoading: false, error: err });
    }
  };

  useEffect(() => {
    const randomUsersDataInLocalStorage =
      localStorage.getItem("randomUsersData");
    if (randomUsersDataInLocalStorage) {
      console.log("no es la primera vez");
      const getRandomUserListLocalStorage = JSON.parse(
        localStorage.getItem("randomUsersData")
      );
      setRandomUsersList({
        isLoading: false,
        data: getRandomUserListLocalStorage,
      });
    } else {
      console.log("es la primera vez, haz el fetch");
      fetchRandomUsersList(50);
    }
  }, []);

  const updateRandomUsersDataLocalStorage = () => {
    // console.log(randomUsersList);
    // localStorage.setItem(
    //   "randomUsersData",
    //   JSON.stringify(randomUsersList.data)
    // );
  };

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
