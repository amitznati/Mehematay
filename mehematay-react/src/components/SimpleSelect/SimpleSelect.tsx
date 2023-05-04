import React from 'react';
import {List, ListItem, ListItemText, MenuItem, Menu} from '@mui/material';

export interface SimpleSelectProps {
  options: Array<string>;
  selectedIndex: number;
  onSelect: (number) => void;
  label: string;
}
const SimpleSelect: React.FC<SimpleSelectProps> = ({
  options,
  selectedIndex,
  onSelect,
  label
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index: number): void => {
    onSelect(index);
    setAnchorEl(null);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label={label}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label={label}
          onClick={handleClickListItem}
        >
          <ListItemText primary={label} secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(): void => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default SimpleSelect;
