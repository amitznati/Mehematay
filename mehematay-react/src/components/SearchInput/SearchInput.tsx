import React from 'react';
import styled from 'styled-components';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

const StyledIconButton = styled(IconButton)`
  padding: 10px;
    '&:focus' {
      outline: none;
    }
`;

const StyledRoot = styled(Paper)`
  direction: ${({theme}) => theme.direction};
  padding: 2px 4px;
  display: flex;
  align-items: center;
`;

export default function SearchInput({ placeholder, onSearch }): JSX.Element {

  const [value, setValue] = React.useState('');
  return (
    <StyledRoot>
      <StyledIconButton
        onClick={(): void => setValue('')}
        disabled={!value}
      >
        <ClearIcon />
      </StyledIconButton>
      <Divider style={{height: 28, margin: 4}} />
      <InputBase
        style={{fontSize: '2.5rem', flex: 1}}
        placeholder={placeholder}
        value={value}
        onChange={(e): void => setValue(e.target.value)}
      />
      <StyledIconButton
        color="primary"
        disabled={!value}
        onClick={(): void => onSearch(value)}
      >
        <SearchIcon />
      </StyledIconButton>
    </StyledRoot>
  );
}
