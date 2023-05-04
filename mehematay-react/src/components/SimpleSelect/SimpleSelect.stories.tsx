import React from "react";
import SimpleSelect from './SimpleSelect.tsx';

export default {
  title: 'SimpleSelect',
  component: SimpleSelect,
  tags: ['autodocs'],
};

export const Simple = () => {
  const options = ['5', '10', '15', '20', '25', '50', '100'];
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return (
    <SimpleSelect
      options={options}
      selectedIndex={selectedIndex}
      onSelect={i => setSelectedIndex(i)}
      label="Example"
    />
  );
};
