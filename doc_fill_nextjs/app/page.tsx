"use client";

import { useTheme, Box, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <Image
        src={"/IMG_2990.webp"}
        alt="Background Image"
        fill
        priority
        style={{ zIndex: -10 }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", pt: 24 }}>
        <Typography variant="h1" fontFamily={"cursive"}>
          ЧСИ НЕДЕЛЧО МИТЕВ
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 24 }}>
        <ButtonBase
          sx={{
            width: 320,
            height: 160,
            textDecoration: "none",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 8,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: theme.palette.secondary.light, // Optional hover effect
            },
          }}
        >
          <Typography
            variant="h4"
            fontFamily={"sans-serif"}
            color="textPrimary"
          >
            ПОПЪЛНИ ДОКУМЕНТИ
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default HomePage;
