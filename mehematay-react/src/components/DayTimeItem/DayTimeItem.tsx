import React from 'react';
import { DayTimeItemProps } from './DayTimeItem.types';
import styled from 'styled-components';

const StyledDayTimeItem = styled.div`
  width: 90%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
  border-top: 2px solid ${({theme}) => theme.colors.primary};
`;

const StyledDayTimeTitle = styled.div`
  font-size: 2.5rem;
  margin: 0 1rem;
  color: ${({theme, dayTime}) => dayTime.inDay ? theme.colors.primary : 'white'};
`;

const StyledDayTimeHour = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 50px;
  padding: .5rem 2rem;
  color: ${({theme}) => theme.colors.secondary};
  transform: translateY(-50%);
`;

const DayTimeItem: React.FC<DayTimeItemProps> = ({ dayTime, ...rest }) => {
  const { title, time } = dayTime;
  return (
    <div {...rest}>
      <StyledDayTimeItem>
        <StyledDayTimeTitle dayTime={dayTime}>{title}</StyledDayTimeTitle>
        <StyledDayTimeHour>{time}</StyledDayTimeHour>
      </StyledDayTimeItem>
    </div>
  );
};
export default DayTimeItem;
