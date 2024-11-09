export type FormState = {
  rank: number;
  percentile: number;
  currentScore: number;
};

export type FormContextType = {
  state: FormState;
  setRank: (rank: number) => void;
  setPercentile: (percentile: number) => void;
  setCurrentScore: (score: number) => void;
};

export type Skill = {
  name: string;
  progress: number;
  color: string;
};
