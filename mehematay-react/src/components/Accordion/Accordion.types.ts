import React from 'react';
export interface AccordionProps {
  header?: string | JSX.Element;
  toggleAccordion: () => void;
  isOpen: boolean;
  headerLeft?: JSX.Element;
  children?: React.ReactNode;
}
export interface AccordionState {
  height: number;
  isOpen: boolean;
}
