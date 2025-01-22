import { useTheme, Box, Typography, ButtonBase, Theme } from "@mui/material";
import Image from "next/image";
import { homePageStyles } from "./page.styles";
import Link from "next/link";

const HomePage = () => {
  return (
    <Box component="main" sx={homePageStyles.container}>
      <Image
        src={"/IMG_2990.webp"}
        alt="Background Image"
        fill
        priority
        style={homePageStyles.image}
      />
      <Box sx={{ display: "flex", justifyContent: "center", pt: 24 }}>
        <Typography variant="h1" fontFamily={"cursive"}>
          ЧСИ НЕДЕЛЧО МИТЕВ
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 24 }}>
        <ButtonBase sx={homePageStyles.buttonBase}>
          <Link style={homePageStyles.link} href={"/documents"}>
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
