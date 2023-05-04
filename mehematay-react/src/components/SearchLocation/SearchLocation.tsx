import React from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { SearchLocationProps } from './SearchLocation.types';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EditLocationIcon from '@mui/icons-material/EditLocation';

import Accordion from '../Accordion/Accordion';
import SearchInput from '../SearchInput/SearchInput';
import SearchLocationResultsList from './SearchLocationResultsList';
import IconButton from '../IconButton/IconButton';


const StyledSearchInputWrap = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  flex-direction: ${({theme}) => theme.direction === 'rtl' ? 'row-reverse' : 'row'};
`;

const SearchLocation: React.FC<SearchLocationProps> = ({
  onSearch,
  searchResults = [],
  onSelectLocation,
  selectedLocation,
  onSearchMyLocation
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };
  const searchMyLocation = (e): void => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(false);
    onSearchMyLocation && onSearchMyLocation();
  };
  const selectLocation = (loc): void => {
    setIsOpen(false);
    onSelectLocation && onSelectLocation(loc);
  };

  return (
    <Paper>
      <Accordion
        header={
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {(selectedLocation && selectedLocation.formattedName) ||
              'no location'}
            <EditLocationIcon />
          </div>
        }
        isOpen={isOpen}
        toggleAccordion={toggleAccordion}
        headerLeft={
          <IconButton
            onClick={searchMyLocation}
            size={40}
            iconSrc={MyLocationIcon}
            variant="secondary"
          />
        }
      >
        <StyledSearchInputWrap>
          <div style={{maxWidth: '80%', margin: '1rem'}}>
            <SearchInput placeholder="חיפוש לפי עיר..." onSearch={onSearch} />
          </div>
        </StyledSearchInputWrap>
        {searchResults.length > 0 && (
          <SearchLocationResultsList
            onSelectLocation={selectLocation}
            items={searchResults}
          />
        )}
      </Accordion>
    </Paper>
  );
};
export default SearchLocation;
