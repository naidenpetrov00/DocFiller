"use client";
import { documentByName } from "@/config/documents";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const DocumentForm = () => {
  const { id } = useParams();

  const document = useMemo(() => documentByName(id!.toString()), [id]);

  return <div></div>;
};

export default DocumentForm;
