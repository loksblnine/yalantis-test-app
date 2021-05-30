import React from "react";
import {
  addActiveUserAction,
  removeActiveUserAction,
} from "../../../redux/actions/dataActions";
import { useDispatch } from "react-redux";
import * as _ from "lodash";

const ElementView = ({ element }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: 10 }}>
      <div className={element.active ? "active" : ""}>
        {`${element.firstName} ${element.lastName}`}
      </div>
      <div className="radio-bar">
        <label htmlFor="active-radio">
          Active
          <input
            id="active-radio"
            type="radio"
            name={element.lastName}
            checked={element.active}
            onChange={() => {
              dispatch(addActiveUserAction(element.id));
            }}
          />
        </label>
        <label htmlFor="not-active-radio">
          Not Active
          <input
            id="not-active-radio"
            type="radio"
            name={element.lastName}
            checked={!element.active}
            onChange={() => {
              dispatch(removeActiveUserAction(element.id));
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default React.memo(ElementView, (prevProps, nextProps) =>
  _.isEqual(prevProps.element, nextProps.element)
);
