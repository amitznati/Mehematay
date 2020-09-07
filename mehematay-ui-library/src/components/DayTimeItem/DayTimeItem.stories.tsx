import React from 'react';
import DayTimeItem from './DayTimeItem';

export default {
  title: 'DayTimeItem',
  component: DayTimeItem
};
export const all = () => (
  <div>
    <div>
      <p>With description</p>
      <DayTimeItem
        dayTime={{
          time: '06:42',
          title: 'עלות השחר'
        }}
      />
    </div>
    <div>
      <p>Without description</p>
      <DayTimeItem dayTime={{ time: '12:42', title: 'חצות' }} />
    </div>
    <div>
      <p>in Day Time</p>
      <DayTimeItem
        dayTime={{ time: '12:42', title: 'עלות השחר 90 דק', inDay: true }}
      />
    </div>
  </div>
);
