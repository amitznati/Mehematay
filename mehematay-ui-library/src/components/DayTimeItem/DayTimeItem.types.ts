import React from 'react';
export interface DayTimeItemProps extends React.HTMLProps<HTMLDivElement> {
  dayTime: {
    time: string;
    title: string;
    desc?: string;
    inDay?: boolean;
  };
}
