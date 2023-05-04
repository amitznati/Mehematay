import React from 'react';
import { LinkHoverProps } from '../NavigationLink/NavigationLink.types';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";

export interface IconButtonProps extends LinkHoverProps {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  iconHref?: string;
  iconSrc?: React.FC<React.SVGProps<SVGSVGElement>> | OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string; };
  size: number;
  style?: object;
  className?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'white'
    | string
    | { bg: string; text: string };
}
