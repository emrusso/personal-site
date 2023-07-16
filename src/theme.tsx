export interface Theme {
  backgroundColor: string;
  color: string;
  gradientBottomColor: string;
  gradientTopColor: string;
  highlightColor: string;
  icon: string;
  iconColor: string;
  linkColor: string;
}

const lightIconColor = '#d97737';
const lightLinkColor = '#af5f2b';
const darkIconColor = '#C38B8B';

export const LightTheme: Theme = {
  backgroundColor: '#ffffff',
  color: '#0a747e',
  gradientBottomColor: lightIconColor,
  gradientTopColor: '#FFF275',
  highlightColor: '#FFF275',
  icon: 'add',
  iconColor: lightIconColor,
  linkColor: lightLinkColor
};

export const LightGardenTheme: Theme = {
  backgroundColor: '#f7fff8',
  color: '#86608E',
  gradientBottomColor: lightIconColor,
  gradientTopColor: '#F9F5E3',
  highlightColor: '#F9F5E3',
  icon: 'filter_vintage',
  iconColor: lightIconColor,
  linkColor: lightLinkColor
};

export const DarkTheme: Theme = {
  backgroundColor: '#2B303A',
  color: '#E6E9E6',
  gradientBottomColor: '#c0321f',
  gradientTopColor: darkIconColor,
  highlightColor: '#c0321f',
  icon: 'add',
  iconColor: darkIconColor,
  linkColor: darkIconColor
};

export const DarkGardenTheme: Theme = {
  backgroundColor: '#05543b',
  color: '#BAC1B8',
  gradientBottomColor: '#562C2C',
  gradientTopColor: darkIconColor,
  highlightColor: '#562C2C',
  icon: 'park',
  iconColor: darkIconColor,
  linkColor: '#eba6a6'
}
