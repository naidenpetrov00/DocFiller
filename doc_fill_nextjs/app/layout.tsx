import theme from "@/config/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { useTheme, Box, Typography, ButtonBase, Theme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { homePageStyles } from "./page.styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Image
              src={"/IMG_2990.webp"}
              alt="Background Image"
              fill
              priority
              style={homePageStyles.image}
            />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
