export interface DocumentSnapshotPath {
  id: number;
  fullPath: string;
  documentName: string;
  visualName: string;
}

export const useDocumentsSnapshot = (): DocumentSnapshotPath[] => {
  return [
    {
      id: 1,
      documentName: "molbaNadvnesenaSuma",
      visualName: "Молба за надвнесена сума",
      fullPath: "/documentsSnapshots/molbaNadvnesenaSuma.jpg",
    },
    {
      id: 2,
      documentName: "molbaNadvnesenaSuma",
      visualName: "Молба за вдигане на запор",
      fullPath: "/documentsSnapshots/molbaVdiganeZapor.jpg",
    },
  ];
};
