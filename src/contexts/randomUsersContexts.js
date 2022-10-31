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
  editUserModal: {
    isOpen: false,
    form: {},
  },
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
  const [editUserModal, setEditUserModal] = useState(
    initialState.editUserModal
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomUsersList.data]);

  const updateRandomUsersDataLocalStorage = () => {
    localStorage.setItem(
      "randomUsersData",
      JSON.stringify(randomUsersList.data)
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addNewRandomUser = useCallback(async () => {
    setIsLoadingButtonAdd(true);
    const count = 1;
    let arrayOfIds = randomUsersList.data.map((user) => user.id);
    arrayOfIds = arrayOfIds.length ? arrayOfIds : [-1];

    try {
      const getHighestId = Math.max(...arrayOfIds);
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeInputValue = useCallback((name, value) => {
    setEditUserModal({
      ...editUserModal,
      form: {
        ...editUserModal.form,
        [name]: value,
      },
    });
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmitForm = useCallback(() => {
    const copyRandomUsersArray = [...randomUsersList.data];
    const indexOfUser = copyRandomUsersArray.findIndex(
      (user) => user.id === editUserModal.form.id
    );
    copyRandomUsersArray[indexOfUser] = editUserModal.form;
    setRandomUsersList({ data: copyRandomUsersArray });
    setEditUserModal({
      isOpen: false,
    });
  });

  const state = useMemo(
    () => ({
      randomUsersList,
      setRandomUsersList,
      addNewRandomUser,
      isLoadingButtonAdd,
      editUserModal,
      setEditUserModal,
      handleChangeInputValue,
      handleSubmitForm,
    }),
    [
      randomUsersList,
      setRandomUsersList,
      addNewRandomUser,
      isLoadingButtonAdd,
      editUserModal,
      setEditUserModal,
      handleChangeInputValue,
      handleSubmitForm,
    ]
  );

  return (
    <RandomUsersContext.Provider value={state}>
      {children}
    </RandomUsersContext.Provider>
  );
};

export default RandomUsersContext;
