export const colors = {
  // Core colors
  red: '#C40000',
  blue: '#005DC4',
  darkBlue: '#002D5E',
} as const;

export type ColorKey = keyof typeof colors;