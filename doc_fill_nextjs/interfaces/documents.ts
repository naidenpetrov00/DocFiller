export interface Fields {
  fullName?: string;
  identityNumber?: string;
  city?: string;
  address?: string;
  courtОfficeAddress?: string;
  enforcementCaseNumber?: number;
  returnToDebtorAmount?: number;
  debtorIban?: string;
  debtorBic?: string;
  debtorBankName?: string;
}

export interface DocumentInfo {
  id: number;
  fullPath: string;
  visualName: string;
  fields: Fields;
  requiredFields: (keyof Fields)[];
}
