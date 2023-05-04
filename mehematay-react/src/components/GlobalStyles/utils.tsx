import defaultTheme from './defaultTheme';

const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
  return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : hex;
};

export const getColor = (color: string, props: any): string => {
  const { [color]: themeColor } = props.theme.colors || {};
  const { [color]: defaultColor } = defaultTheme.colors;
  return themeColor || defaultColor || color;
};

export const getColorRGB = (color: string, props: any): string => {
  return hexToRgb(getColor(color, props));
};
