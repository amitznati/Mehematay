export interface AccordionProps {
  header?: string | JSX.Element;
  toggleAccordion: () => void;
  isOpen: boolean;
  headerLeft?: JSX.Element;
}
export interface AccordionState {
  height: number;
  isOpen: boolean;
}
