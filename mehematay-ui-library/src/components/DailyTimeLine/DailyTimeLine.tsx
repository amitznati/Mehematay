import React from 'react';
import styled from 'styled-components';

import { DailyTimeLineProps } from './DailyTimeLine.types';
import DayTimeItem from '../DayTimeItem/DayTimeItem';
import { getColor } from '../GlobalStyles/utils';

const times: Array<string> = [];
for (let i = 0; i < 10; i += 1) times.push(`0${i}:00`);
for (let i = 10; i < 24; i += 1) times.push(`${i}:00`);
const getTimeTop = (dayTime, offset = 0): string => {
  const time = dayTime.time;
  // if (dayTime.key === 'dayHour') return '5rem';
  const [h, m] = time.split(':');
  return `${Number((h * 20 + (m / 60) * 20 + offset).toFixed(2))}rem`;
};
const getNowTime = (): { time: string } => {
  const now = new Date();
  return {
    time: `${now.getHours()}:${
      now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    }`
  };
};

const getStyledDayTimeLineStyle = (props): string => {
  const getTopForTime = (name, offset = 0): string => {
    const dayTime = props.dayTimes.find((t) => t.key === name);
    return dayTime ? getTimeTop(dayTime, offset) : '0';
  };
  return `
  font-size: 1.6rem;
  text-align: right;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    rgb(3, 3, 3) 0%,
    rgb(3, 3, 3) ${getTopForTime('alotHashahar90')},
    rgba(30, 152, 209, 1) ${getTopForTime('sunrise')},
    rgb(202, 229, 243) ${getTopForTime('sunrise', 15)},
    rgb(202, 229, 243) ${getTopForTime('hazot', -5)},
    rgb(240, 231, 26) ${getTopForTime('hazot')},
    rgb(202, 229, 243) ${getTopForTime('hazot', 5)},
    rgb(202, 229, 243) ${getTopForTime('sunset', -10)},
    rgb(245, 86, 12) ${getTopForTime('sunset')},
    rgb(52, 17, 1) ${getTopForTime('tzetHakohavim')},
    rgb(3, 3, 3) ${getTopForTime('tzetHakohavimRT')},
    rgb(3, 3, 3) 100%
  );

  .daily-times-time {
    border: 1px solid rgba(160, 160, 160, 0.3);
    height: 20rem;
    text-align: left;
    padding: 0.5rem;
  }
  .daily-times-now {
    border-top: 3px solid ${getColor('tertiary', props)};
    position: absolute;
    left: 0;
    right: 0;
    text-align: left;
    padding: 0 4rem;
    top: ${getTimeTop(getNowTime())};
    font-size: 2.6rem;
    color: ${getColor('tertiary', props)};
    line-height: 1;
  }
  .daily-times-time-item {
    position: absolute;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    box-shadow: 0 2px 4px white;
    border: none;
  }
  `;
};

const StyledDayTimeLine = styled.div`
  ${(props): string => getStyledDayTimeLineStyle(props)}
`;

const StyledDayTimesItem = styled(DayTimeItem)`
  position: absolute;
  right: 1rem;
  left: 0;
  top: ${(props): string => getTimeTop(props.dayTime)};
`;

const DailyTimeLine: React.FC<DailyTimeLineProps> = ({ dayTimes }) => {
  return (
    <StyledDayTimeLine {...{ dayTimes }}>
      {times.map((time) => (
        <div key={time} className="daily-times-time">
          {time}
        </div>
      ))}
      <div className="daily-times-now">
        <div>עכשיו</div>
        <div>{getNowTime().time}</div>
      </div>
      {dayTimes.map((dayTime) => (
        <StyledDayTimesItem key={dayTime.key} dayTime={dayTime} />
      ))}
    </StyledDayTimeLine>
  );
};
export default DailyTimeLine;
