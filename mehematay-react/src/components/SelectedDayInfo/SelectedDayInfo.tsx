import React from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { SelectedDayInfoProps } from './SelectedDayInfo.types';

import NextEvents from './NextEvents';


const StyledHeEvent = styled.p`
  color: ${({theme}) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const StyledRoot = styled.div`
  font-size: 1.6rem;
  text-align: right;
  direction: ${({theme}) => theme.direction};
  padding: 2rem 2rem 0 2rem;
`;

const SelectedDayInfo: React.FC<SelectedDayInfoProps> = ({
  selectedDateFormatted,
  nextEvents = [],
  selectedLocation
}) => {
  return (
    <Paper>
      <StyledRoot>
        <p>
          זמני היום עבור: <span style={{fontSize: '2rem'}}>{selectedLocation?.formattedName}</span>
        </p>
        {selectedDateFormatted.event && (
          <StyledHeEvent>{selectedDateFormatted.event}</StyledHeEvent>
        )}
        <span style={{marginLeft: '2rem'}}>
          {selectedDateFormatted.formattedDateHe}
        </span>
        <span>{selectedDateFormatted.formattedDate}</span>
      </StyledRoot>
      <div style={{padding: '2rem'}}>
        <NextEvents events={nextEvents} />
      </div>
    </Paper>
  );
};
export default SelectedDayInfo;
