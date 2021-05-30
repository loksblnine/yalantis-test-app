import React from 'react';
import ElementView from './ElementView';

const DataView = ({data, activeUsers, letter}) => {
  const dataToShow = React.useMemo(
    () =>
      data
        .filter((el) =>
          el.lastName.toLowerCase().startsWith(letter.toLowerCase()),
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map((el) => ({
          ...el,
          active: activeUsers.includes(el.id),
        })),
    [data, letter, activeUsers],
  );

  if (!dataToShow.length) {
    return (
      <div>
        <div className="letter-style">{letter}</div>
        <div>-</div>
      </div>
    );
  }
  return (
    <div>
      <div className="letter-style">{letter}</div>
      {dataToShow.map((el) => (
        <ElementView key={el.id} element={el} />
      ))}
    </div>
  );
};

export default DataView;
