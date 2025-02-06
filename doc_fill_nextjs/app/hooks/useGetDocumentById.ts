import { documentsInfo } from "@/app/lib/data/documents/documents";
import { notFound } from "next/navigation";

export const useGetDocumentById = (id: string) => {
  const document = Object.values(documentsInfo).find(
    (document) => document.id.toString() == id
  );
  if (document != null) {
    return document;
  }

  return notFound();
};
