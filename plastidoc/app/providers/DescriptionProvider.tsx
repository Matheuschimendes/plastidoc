"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type DescriptionStatus = "Rascunho" | "Finalizada";

type DescriptionData = {
  selectedSurgery: string;
  selectedTechnique: string;
  selectedSolution: string;
  selectedMaterial: string;
  selectedClosure: string;
  selectedDressing: string;
  observations: string;
};

type DescriptionContextValue = {
  data: DescriptionData;
  updateField: <K extends keyof DescriptionData>(
    field: K,
    value: DescriptionData[K],
  ) => void;
  resetDescription: () => void;
  generateDescription: (texts: string[]) => string;
  createDescriptionPayload: (
    status: DescriptionStatus,
    content: string,
  ) => {
    id: string;
    doctorId: string;
    doctorName: string;
    status: DescriptionStatus;
    surgeryId: string;
    content: string;
    createdAt: string;
  };
};

const initialData: DescriptionData = {
  selectedSurgery: "",
  selectedTechnique: "",
  selectedSolution: "",
  selectedMaterial: "",
  selectedClosure: "",
  selectedDressing: "",
  observations: "",
};

const DescriptionContext =
  createContext<DescriptionContextValue | null>(null);

export function DescriptionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<DescriptionData>(initialData);

  function updateField<K extends keyof DescriptionData>(
    field: K,
    value: DescriptionData[K],
  ) {
    setData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function resetDescription() {
    setData(initialData);
  }

  function generateDescription(texts: string[]) {
    return texts.filter(Boolean).join("\n\n");
  }

  function createDescriptionPayload(
    status: DescriptionStatus,
    content: string,
  ) {
    return {
      id: crypto.randomUUID(),
      doctorId: "doctor-demo-id",
      doctorName: "Dr. Gabriel",
      status,
      surgeryId: data.selectedSurgery,
      content,
      createdAt: new Date().toISOString(),
    };
  }

  const value = useMemo(
    () => ({
      data,
      updateField,
      resetDescription,
      generateDescription,
      createDescriptionPayload,
    }),
    [data],
  );

  return (
    <DescriptionContext.Provider value={value}>
      {children}
    </DescriptionContext.Provider>
  );
}

export function useDescription() {
  const context = useContext(DescriptionContext);

  if (!context) {
    throw new Error(
      "useDescription must be used within DescriptionProvider",
    );
  }

  return context;
}