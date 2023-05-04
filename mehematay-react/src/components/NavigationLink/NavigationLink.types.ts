import React from 'react';

export interface LinkHoverProps {
  backgroundColorHover?: string;
  backgroundColor?: string;
  textColor?: string;
  textColorHover?: string;
  children?: React.ReactNode;
}
export interface NavigationLinkProps extends LinkHoverProps {
  onClick?: any;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  rounded?: boolean;
  className?: string;
  to: string;
  active?: boolean;
}
