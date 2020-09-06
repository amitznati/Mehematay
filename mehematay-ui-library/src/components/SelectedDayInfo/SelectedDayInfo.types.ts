import { LocationItem } from '../SearchLocation/SearchLocation.types';
export interface SelectedDayInfoProps {
  selectedDateFormatted: {
    event: string;
    formattedDateHe: string;
    formattedDate: string;
  };
  selectedLocation?: LocationItem;
  nextEvents?: Array<NextEventItem>;
}
export interface NextEventItem {
  title: string;
  out: string;
  enter: string;
  date: {
    formattedDate: string;
    formattedDateHe: string;
  };
}
export interface NextEventProps {
  events: Array<NextEventItem>;
}
