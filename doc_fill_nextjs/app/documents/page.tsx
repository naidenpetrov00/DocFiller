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
import { useRouter } from "next/navigation";
import { paths } from "@/config/paths";
import { documentsInfo } from "@/app/lib/data/documents/documents";

const DocumentsPage = () => {
  const router = useRouter();

  const handleDocumentClick = (
    event: React.MouseEvent<HTMLDivElement>,
    documentId: number
  ) => {
    router.push(paths.documentsForm(documentId));
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
            <Grid
              key={i}
              container
              spacing={16}
              sx={documentsPageStyles.gridContainer}
            >
              {Object.entries(documentsInfo).map(([key, documentInfo]) => (
                <Stack
                  key={key}
                  onClick={(event) =>
                    handleDocumentClick(event, documentInfo.id)
                  }
                  sx={{
                    alignItems: "center",
                    maxWidth: 300,
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={documentInfo.fullPath}
                    alt={documentInfo.fullPath}
                    width={200}
                    height={300}
                    priority
                  />
                  <Typography sx={{ fontSize: 32 }}>
                    {documentInfo.visualName}
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
