export const colors = {
  // Core colors
  red: '#C40000',
  blue: '#005DC4',
  darkBlue: '#002D5E',
  white: '#FFFFFF',
  lightGrey: '#D6D6D6',
  darkGrey: '#454545',
  black: '#000000',
} as const;

export type ColorKey = keyof typeof colors;