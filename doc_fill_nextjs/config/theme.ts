"use client";
import { createTheme } from "@mui/material/styles";

const colorPallete = {
  black: "#181C14",
  grey: "#3C3D37",
  green: "#697565",
  white: "#ECDFCC",
};

const theme = createTheme({
  // cssVariables: true,
  palette: {
    primary: { main: colorPallete.black },
    secondary: { main: colorPallete.green },
    background: { paper: colorPallete.grey },
    text: { primary: colorPallete.white, secondary: colorPallete.black },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        ":root": {
          "--secondary-main": themeParam.palette.secondary.main,
          "--secondary-light": themeParam.palette.secondary.light,
          "--primary-main": themeParam.palette.primary.main,
          "--primary-light": themeParam.palette.primary.light,
        },
      }),
    },
  },
});

export default theme;
