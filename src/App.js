import * as React from "react";
import "./App.css";
import {
  ALPHABET,
  DATA_REDUCER_KEY,
  DATA_URL,
  LOCAL_STORAGE_KEY_ACTIVE_USERS,
} from "./constants";
import { DataView, Sidebar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUsers, setDataAction } from "./redux/actions/dataActions";

const App = () => {
  const [loading, setLoading] = React.useState(false);

  const { data, activeUsers } = useSelector((state) => state[DATA_REDUCER_KEY]);
  const dispatch = useDispatch();

  const getData = React.useCallback(() => {
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((newData) => {
        dispatch(setDataAction(newData));
        setLoading(false);
      });
  }, [dispatch]);

  React.useEffect(() => {
    getData();

    const storageActiveUsers = localStorage.getItem(
      LOCAL_STORAGE_KEY_ACTIVE_USERS
    );

    if (storageActiveUsers) {
      dispatch(setActiveUsers(JSON.parse(storageActiveUsers)));
    }
  }, [getData, dispatch]);

  React.useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_ACTIVE_USERS,
      JSON.stringify(activeUsers)
    );
  }, [activeUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      {ALPHABET.map((letter) => (
        <DataView
          letter={letter}
          data={data}
          activeUsers={activeUsers}
          key={letter}
        />
      ))}
      <Sidebar />
    </div>
  );
};

export default App;
