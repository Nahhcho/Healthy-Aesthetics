import React from 'react';

const styles = {
  Dropdown: {
    cursor: 'pointer',
    top: '492px',
    left: '16px',
    width: '343px',
    height: '39px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#e5e5e5',
    color: '#0e0e0e',
    fontSize: '16px',
    lineHeight: '39px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Sedentary',
  values: [
    'Lightly Active',
    'Moderately Active',
    'Very Active',
  ],
};

const Dropdown = (props) => {
  return (
    <select style={styles.Dropdown} defaultValue="">
      <option value="" disabled hidden>{props.label ?? defaultProps.label}</option>
      {(props.values ?? defaultProps.values).map((value) => (
        <option value={value} key={value}>{value}</option>
      ))}
    </select>
  );
};

export default Dropdown;