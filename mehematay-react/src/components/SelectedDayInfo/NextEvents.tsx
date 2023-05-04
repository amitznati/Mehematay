import React from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { NextEventProps } from './SelectedDayInfo.types';


const StyledRoot = styled(Paper)`
  font-size: 1.8rem;
  text-align: right;
  direction: ${({theme}) => theme.direction};
  padding: 1rem;
`;

const StyledTitle = styled(Paper)`
  color: ${({theme}) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 0.3rem solid ${({theme}) => theme.colors.primary};
`;

const NextEvents: React.FC<NextEventProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <StyledRoot key={event.date.formattedDateHe}>
          <div>
            <StyledTitle>{event.title}</StyledTitle>
            <div>
              <span style={{marginLeft: '2rem'}}>
                {event.date.formattedDateHe}
              </span>
              <span>{event.date.formattedDate}</span>
            </div>
            <p>{`כניסה ${event.enter}`}</p>
            <p>{`יציאה ${event.out}`}</p>
          </div>
        </StyledRoot>
      ))}
    </div>
  );
};

export default NextEvents;
