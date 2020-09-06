export interface AccordionProps {
  header?: string | JSX.Element;
  toggleAccordion: () => void;
  isOpen: boolean;
}
export interface AccordionState {
  height: number;
  isOpen: boolean;
}
