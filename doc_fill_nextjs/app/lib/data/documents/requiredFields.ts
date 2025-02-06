import { DocumentName, Fields } from "@/interfaces/documents";
import { DocumentNames } from "./documentNames";

export const fieldLabels: Record<keyof Fields, string> = {
  fullName: "Имена",
  identityNumber: "ЕГН/ЛНЧ",
  city: "Град",
  address: "Адрес",
  enforcementCaseNumber: "Изпълнително дело",
  courtОfficeAddress: "Адрес на съда",
  returnToDebtorAmount: "Сума за връщане",
  debtorIban: "IBAN на длъжника",
  debtorBic: "BIC на длъжника",
  debtorBankName: "Банка на длъжника",
};

export const inputTypes: Record<string, string> = {
  fullName: "text",
  identityNumber: "number",
  city: "text",
  address: "text",
  enforcementCaseNumber: "number",
  courtОfficeAddress: "text",
  returnToDebtorAmount: "number",
  debtorIban: "text",
  debtorBic: "text",
  debtorBankName: "text",
};

export const requiredFields: Record<
  DocumentName,
  Partial<Record<keyof Fields, string>>
> = {
  [DocumentNames.MolbaNadvnesenaSuma]: {
    fullName: fieldLabels.fullName,
    identityNumber: fieldLabels.identityNumber,
    city: fieldLabels.city,
    address: fieldLabels.address,
    enforcementCaseNumber: fieldLabels.enforcementCaseNumber,
    courtОfficeAddress: fieldLabels.courtОfficeAddress,
    returnToDebtorAmount: fieldLabels.returnToDebtorAmount,
    debtorIban: fieldLabels.debtorIban,
    debtorBic: fieldLabels.debtorBic,
    debtorBankName: fieldLabels.debtorBankName,
  },
  [DocumentNames.MolbaVdiganeZapor]: {
    fullName: fieldLabels.fullName,
    identityNumber: fieldLabels.identityNumber,
    city: fieldLabels.city,
    address: fieldLabels.address,
    enforcementCaseNumber: fieldLabels.enforcementCaseNumber,
    debtorIban: fieldLabels.debtorIban,
    debtorBic: fieldLabels.debtorBic,
    debtorBankName: fieldLabels.debtorBankName,
  },
};
