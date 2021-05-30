import React from "react";
import * as _ from "lodash";

const SidebarElementView = ({ element }) => (
  <div>{`${element.firstName} ${element.lastName}`}</div>
);

export default React.memo(SidebarElementView, (prevProps, nextProps) =>
  _.isEqual(prevProps.element, nextProps.element)
);
