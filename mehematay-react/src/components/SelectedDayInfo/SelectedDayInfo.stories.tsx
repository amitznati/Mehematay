import SelectedDayInfo from './SelectedDayInfo';

export default {
  title: 'SelectedDayInfo',
  component: SelectedDayInfo,
  tags: ['autodocs'],
};

export const DayInfo = () => {
  return (
    <SelectedDayInfo
      selectedDateFormatted={{
        event: 'ערב שבת נחמו',
        formattedDate: '38 אוגוסט 2020',
        formattedDateHe: 'ד אלול תש"פ'
      }}
    />
  );
};
