import { DocumentNames } from "./documentNames";
import { requiredFields } from "./requiredFields";
import { DocumentInfo } from "@/interfaces/documents";

export const documentsInfo: Record<string, DocumentInfo> = {
  [DocumentNames.MolbaNadvnesenaSuma]: {
    id: 1,
    visualName: "Молба за надвнесена сума",
    fullPath: "/documentsSnapshots/molbaNadvnesenaSuma.jpg",
    fields: {},
    requiredFields: requiredFields.molbaNadvnesenaSuma,
  },
  [DocumentNames.MolbaVdiganeZapor]: {
    id: 2,
    visualName: "Молба за вдигане на запор",
    fullPath: "/documentsSnapshots/molbaVdiganeZapor.jpg",
    fields: {},
    requiredFields: requiredFields.molbaVdiganeZapor,
  },
} as const;
