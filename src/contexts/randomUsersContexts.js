import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getUsersData } from "../api/index";

const initialState = {
  randomUsersList: {
    isLoading: false,
    data: JSON.parse(localStorage.getItem("randomUsersData")) || [],
    error: "",
  },
  isLoadingButtonAdd: false,
};
const RandomUsersContext = createContext(initialState);

export const useRandomUsersContext = () => useContext(RandomUsersContext);

export const RandomUsersContextProvider = ({ children }) => {
  const [randomUsersList, setRandomUsersList] = useState(
    initialState.randomUsersList
  );
  const [isLoadingButtonAdd, setIsLoadingButtonAdd] = useState(
    initialState.isLoadingButtonAdd
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
    if (!randomUsersDataInLocalStorage) {
      fetchRandomUsersList(50);
    }
  }, []);

  useEffect(() => {
    updateRandomUsersDataLocalStorage();
  }, [randomUsersList.data]);

  const updateRandomUsersDataLocalStorage = () => {
    // localStorage.setItem(
    //   "randomUsersData",
    //   JSON.stringify(randomUsersList.data)
    // );
  };

  const addNewRandomUser = useCallback(async () => {
    setIsLoadingButtonAdd(true);
    const count = 1;
    try {
      const getHighestId = Math.max(
        ...randomUsersList.data.map((user) => user.id)
      );
      const user = await getUsersData(count);
      const userWithId = { ...user[0], id: getHighestId + 1 };
      const newData = [userWithId].concat(randomUsersList.data);
      setRandomUsersList({
        isLoading: false,
        data: newData,
      });
      setIsLoadingButtonAdd(false);
    } catch (err) {
      // setRandomUsersList({ error: err });
    }
  });

  const state = useMemo(
    () => ({
      randomUsersList,
      setRandomUsersList,
      addNewRandomUser,
      isLoadingButtonAdd,
    }),
    [randomUsersList, setRandomUsersList, addNewRandomUser, isLoadingButtonAdd]
  );

  return (
    <RandomUsersContext.Provider value={state}>
      {children}
    </RandomUsersContext.Provider>
  );
};

export default RandomUsersContext;
