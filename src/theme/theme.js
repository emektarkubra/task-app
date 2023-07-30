const black = "#111110";
const white = "#ffffff";
const blue = "#0652DD";
const green = "#44bd32";
const red = "#EA2027";
const gray = "#333131";
const lightGray = "#6c757d";

export const lightTheme = {
  colors: {
    bgColor: white,
    otherBgColor: white,
    textColor: black,
    title: black,
    showButton: green,
    lightGray,
    green,
    blue,
    red,
    white,
    gray,
  },
};

export const darkTheme = JSON.parse(JSON.stringify(lightTheme));
darkTheme.colors.bgColor = black;
darkTheme.colors.textColor = white;
darkTheme.colors.otherBgColor = black;
darkTheme.colors.title = white;
