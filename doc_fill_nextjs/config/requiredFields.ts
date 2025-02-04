import { Fields } from "@/interfaces/documents";
import { DocumentName, DocumentNames, documentsInfo } from "./documents";

export const requiredFields: Record<DocumentName, (keyof Fields)[]> = {
  [DocumentNames.MolbaNadvnesenaSuma]: [
    "fullName",
    "identityNumber",
    "city",
    "address",
    "enforcementCaseNumber",
    "courtОfficeAddress",
    "returnToDebtorAmount",
    "debtorIban",
    "debtorBic",
    "debtorBankName",
  ],
  [DocumentNames.MolbaVdiganeZapor]: [
    "fullName",
    "identityNumber",
    "city",
    "address",
    "enforcementCaseNumber",
    "debtorIban",
    "debtorBic",
    "debtorBankName",
  ],
};
