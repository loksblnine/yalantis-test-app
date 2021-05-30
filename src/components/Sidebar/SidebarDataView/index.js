import React from "react";
import * as moment from "moment";
import { MONTHS } from "../../../constants";
import SidebarElementView from "./SidebarElementView";

const SidebarDataView = ({ month, data }) => {
  const dataToShow = React.useMemo(
    () =>
      data
        .filter((el) => month === MONTHS[moment(el.dob).month()])
        .sort((a, b) => a.lastName.localeCompare(b.lastName)),
    [data, month]
  );

  if (!dataToShow.length) {
    return null;
  }

  return (
    <div>
      <div className="month">{month.toUpperCase()}</div>
      {dataToShow.map((el) => (
        <SidebarElementView key={el.id} element={el} />
      ))}
    </div>
  );
};

export default SidebarDataView;
