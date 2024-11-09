"use client";

import { FormContextType, FormState } from "@/lib/types";
import { createContext, useContext, useState } from "react";

// Initial State
const initialState: FormState = {
  rank: 1,
  percentile: 0,
  currentScore: 0,
};

// Create Context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create Provider
type FormProviderProps = {
  children: React.ReactNode;
};

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [state, setState] = useState<FormState>(initialState);

  const setRank = (rank: number) => setState((prev) => ({ ...prev, rank }));
  const setPercentile = (percentile: number) =>
    setState((prev) => ({ ...prev, percentile }));
  const setCurrentScore = (score: number) =>
    setState((prev) => ({ ...prev, currentScore: score }));

  return (
    <FormContext.Provider
      value={{ state, setRank, setPercentile, setCurrentScore }}
    >
      {children}
    </FormContext.Provider>
  );
};

// custom hook to use the context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
