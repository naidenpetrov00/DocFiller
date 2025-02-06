import { documentsInfo } from "../data/documents/documents";

export const getDocumentsIds = () => {
  return Object.values(documentsInfo).map((document) => document.id.toString());
};
