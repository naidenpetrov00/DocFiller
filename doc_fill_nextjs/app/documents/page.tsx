"use client";

import {
  Accordion,
  AccordionSummary,
  Box,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { documentsPageStyles } from "./page.styles";
import {
  DocumentSnapshotPath,
  useDocumentsSnapshot,
} from "../hooks/useDocumentsSnapshots";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const snapshotsPaths = useDocumentsSnapshot();
  const router = useRouter();

  const handleDocumentClick = (
    event: React.MouseEvent<HTMLDivElement>,
    snapshotId: number
  ) => {
    router.push(`/documentForm/${snapshotId}`);
  };
  return (
    <Box sx={documentsPageStyles.container}>
      {[1, 2, 3].map((i) => (
        <Box key={i} sx={documentsPageStyles.accordionContainer}>
          <Accordion sx={documentsPageStyles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <Grid container spacing={16} sx={documentsPageStyles.gridContainer}>
              {snapshotsPaths.map((snapshotPath) => (
                <Stack
                  onClick={(event) =>
                    handleDocumentClick(event, snapshotPath.id)
                  }
                  sx={{
                    alignItems: "center",
                    maxWidth: 300,
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={snapshotPath.fullPath}
                    alt={snapshotPath.fullPath}
                    width={200}
                    height={300}
                    priority
                  />
                  <Typography sx={{ fontSize: 32 }}>
                    {snapshotPath.visualName}
                  </Typography>
                </Stack>
              ))}
            </Grid>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default DocumentsPage;
