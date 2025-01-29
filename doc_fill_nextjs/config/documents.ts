import { DocumentInfo } from "@/interfaces/documents";
import { requiredFields } from "./requiredFields";

export const DocumentNames = {
  MolbaNadvnesenaSuma: "molbaNadvnesenaSuma",
  MolbaVdiganeZapor: "molbaVdiganeZapor",
} as const;
export type DocumentName = (typeof DocumentNames)[keyof typeof DocumentNames];

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
