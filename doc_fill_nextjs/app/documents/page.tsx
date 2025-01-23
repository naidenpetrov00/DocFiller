import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { documentsPageStyles } from "./page.styles";

const DocumentsPage = () => {
  return (
    <Box sx={documentsPageStyles.container}>
      {[1, 2, 3].map((i) => (
        <Box key={i} sx={documentsPageStyles.accordionContainer}>
          <Accordion defaultExpanded sx={documentsPageStyles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <Grid container spacing={16} sx={documentsPageStyles.gridContainer}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Grid key={i} sx={documentsPageStyles.documentContainer}></Grid>
              ))}
            </Grid>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default DocumentsPage;
