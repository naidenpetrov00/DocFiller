import Link from "next/link";

import { Box, Typography, ButtonBase } from "@mui/material";

import { homePageStyles } from "./page.styles";

const HomePage = () => {
  return (
    <Box component="main" sx={homePageStyles.container}>
      <Box sx={homePageStyles.titleContainer}>
        <Typography variant="h1" fontFamily={"cursive"}>
          ЧСИ НЕДЕЛЧО МИТЕВ
        </Typography>
      </Box>
      <Box sx={homePageStyles.buttonBaseContainer}>
        <ButtonBase sx={homePageStyles.buttonBase}>
          <Link style={homePageStyles.link} href="/documents">
            <Typography
              variant="h4"
              fontFamily="sans-serif"
              color="textPrimary"
            >
              ПОПЪЛНИ ДОКУМЕНТИ
            </Typography>
          </Link>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default HomePage;
