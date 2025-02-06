import DocumentForm from "@/app/components/documentForm/DocumentForm";
import { getDocumentsIds } from "@/app/lib/services/documents";

interface DocumentFormPageProps {
  params: Promise<{ id: string }>;
}
const DocumentFormPage = async ({ params }: DocumentFormPageProps) => {
  const id = (await params).id;

  return (
    <DocumentForm id={id}>
      <div></div>
    </DocumentForm>
  );
};

export async function generateStaticParams() {
  const ids = getDocumentsIds();
  return ids.map((id) => ({
    id,
  }));
}

export default DocumentFormPage;
