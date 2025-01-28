// /pages/[id].tsx

import { useRouter } from "next/router";
import { useDocumentsSnapshot } from "../../hooks/useDocumentsSnapshots";

const DocumentForm = () => {
  const { query } = useRouter();
  const { id } = query;

  // const snapshots = useDocumentsSnapshot(); // Replace with dynamic fetching if needed

  // const document = snapshots.find((doc) => doc.id === Number(id));

  // if (!document) {
  //   return <div>Document not found</div>;
  // }

  return <div>{id}</div>;
};

export default DocumentForm;
