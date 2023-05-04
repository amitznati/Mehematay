import React from 'react';
import styled from 'styled-components';
import {ListItemButton , ListItemText} from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


const StyledRoot = styled.div`
  width: 100%;
  height: 400px;
  max-width: 300px;
  background-color: ${({theme}) => theme.colors.greyLight};
`

interface CustomVirtualizedListProps {
  items: Array<string>;
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomVirtualizedList: React.FC<CustomVirtualizedListProps> = ({
  items,
  onSelect,
  selectedValue
}) => {
  function renderRow(props: ListChildComponentProps): JSX.Element {
    const { index, style } = props;

    return (
      <ListItemButton
        style={style}
        key={index}
        onClick={(): void => onSelect(items[index])}
        selected={items[index] === selectedValue}
      >
        <ListItemText primary={items[index]} />
      </ListItemButton>
    );
  }
  return (
    <StyledRoot>
      <FixedSizeList
        height={400}
        width={300}
        itemSize={46}
        initialScrollOffset={items.indexOf(selectedValue) * 46}
        itemCount={items.length}
      >
        {renderRow}
      </FixedSizeList>
    </StyledRoot>
  );
};

export default CustomVirtualizedList;
