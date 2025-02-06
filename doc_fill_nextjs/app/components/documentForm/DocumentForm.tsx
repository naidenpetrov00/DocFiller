"use client";

import { useGetDocumentById } from "@/app/hooks/useGetDocumentById";
import { submitDocumentInfo } from "@/app/lib/actions/documentAction";
import {
  fieldLabels,
  inputTypes,
} from "@/app/lib/data/documents/requiredFields";
import { Button } from "@/app/ui/button";
import { Fields } from "@/interfaces/documents";
import { Box, TextField } from "@mui/material";
import Form from "next/form";
import { ReactNode, useActionState } from "react";

interface DocumentFormProps {
  children: ReactNode;
  id: string;
}
const DocumentForm = ({ children, id }: DocumentFormProps) => {
  const [state, formAction, pending] = useActionState(submitDocumentInfo, null);

  const document = useGetDocumentById(id!.toString());

  return (
    <Form action={formAction}>
      {Object.entries(document.requiredFields).map(([key, field]) => (
        <Box key={key}>
          <TextField
            id="outlined-basic"
            label={fieldLabels[key as keyof Fields]}
            variant="outlined"
            type={inputTypes[key]}
            required
          />
        </Box>
      ))}
      <Button type="submit">Изпечатай</Button>
      {children}
    </Form>
  );
};

export default DocumentForm;
