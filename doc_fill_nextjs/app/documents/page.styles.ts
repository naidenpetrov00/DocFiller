import { SxProps } from "@mui/material";

interface DocumentsPageStyles {
  container: SxProps;
  accordionContainer: SxProps;
  accordion: SxProps;
  gridContainer: SxProps;
  documentContainer: SxProps;
}

export const documentsPageStyles: DocumentsPageStyles = {
  container: { m: 8, display: "flex", flexDirection: "column", gap: 8 },
  accordionContainer: {},
  accordion: { backgroundColor: "transparent" },
  gridContainer: { mt: 8, mb: 8, marginX: 4 },
  documentContainer: {
    width: 150,
    height: 250,
    backgroundColor: "white",
    border: 4,
  },
};
