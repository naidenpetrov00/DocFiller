import { SxProps, Theme } from "@mui/material";

interface HomePageStyles {
  container: SxProps<Theme>;
  titleContainer: SxProps;
  image: React.CSSProperties;
  link: React.CSSProperties;
  buttonBaseContainer: SxProps<Theme>;
  buttonBase: SxProps<Theme>;
}

export const homePageStyles: HomePageStyles = {
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  titleContainer: { display: "flex", justifyContent: "center", pt: 24 },
  image: { zIndex: -10 },
  buttonBaseContainer: { display: "flex", justifyContent: "center", mt: 24 },
  buttonBase: {
    width: 320,
    height: 160,
    backgroundColor: "var(--secondary-main)",
    borderRadius: 8,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "var(--secondary-light)",
    },
  },
  link: {
    textDecoration: "none",
  },
};
