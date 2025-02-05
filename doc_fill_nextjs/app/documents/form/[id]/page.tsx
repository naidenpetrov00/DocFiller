import { getDocumentById, getDocumentsIds } from "@/config/documents";
import { notFound } from "next/navigation";

interface DocumentFormProps {
  params: Promise<{ id: string }>;
}
const DocumentForm = async ({ params }: DocumentFormProps) => {
  const id = (await params).id;

  const document = getDocumentById(id!.toString());
  if (!document) {
    notFound();
  }

  return <div></div>;
};

export async function generateStaticParams() {
  const ids = getDocumentsIds();
  return ids.map((id) => ({
    id,
  }));
}

export default DocumentForm;
