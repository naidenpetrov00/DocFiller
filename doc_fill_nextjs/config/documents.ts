import { log } from "console";
import { DocumentNames } from "./documentNames";
import { requiredFields } from "./requiredFields";
import { DocumentInfo } from "@/interfaces/documents";

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

export const getDocumentsIds = () => {
  return Object.values(documentsInfo).map((document) => document.id.toString());
};

export const getDocumentById = (id: string) => {
  return Object.values(documentsInfo).find(
    (document) => document.id.toString() == id
  );
  console.log("document");
  console.log(document);

  if (document == undefined) {
  }
};
