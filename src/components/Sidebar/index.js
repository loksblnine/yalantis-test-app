import React from "react";
import { useSelector } from "react-redux";
import { DATA_REDUCER_KEY, MONTHS } from "../../constants";
import SidebarDataView from "./SidebarDataView";

const Sidebar = () => {
  const { data, activeUsers } = useSelector((state) => state[DATA_REDUCER_KEY]);

  const dataToShow = React.useMemo(
    () => data.filter((el) => activeUsers.includes(el.id)),
    [data, activeUsers]
  );

  return (
    <div className="sidebar">
      <div className="info">
        {dataToShow.length ? "Employees birthday" : "Employees List is empty"}
      </div>
      {MONTHS.map((month) => (
        <SidebarDataView month={month} data={dataToShow} key={month} />
      ))}
    </div>
  );
};

export default Sidebar;
