import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@mui/material';

const StyledListItem = styled(ListItem)`
  box-shadow: ${({theme}) => theme.shadows.hover};
  margin: 1rem;
  width: unset;
`;

const StyledRoot = styled.div`
  background-color: ${({theme}) => theme.colors.greyLight};
`;
export default function SearchLocationResultsList({
  items,
  onSelectLocation
}): JSX.Element {
  return (
    <StyledRoot>
      <List component="nav">
        {items.map((item) => (
          <StyledListItem
            button
            onClick={(): void => onSelectLocation(item)}
            key={item.coords.latitude + item.coords.longitude}
          >
            <ListItemText
              style={{textAlign: 'center'}}
              primary={item.formattedName}
            />
          </StyledListItem>
        ))}
      </List>
    </StyledRoot>
  );
}
