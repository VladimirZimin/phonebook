import React from "react";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Find contact by name"
        value={value}
        onChange={onChangeFilter}
      />
    </>
  );
};

export default Filter;
