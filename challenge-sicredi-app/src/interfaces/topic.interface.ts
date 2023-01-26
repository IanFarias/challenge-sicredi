export interface ITopicDetailed {
  id: number;
  title: string;
  description: string;
  session: {
    id: number;
    started_at: Date;
    finished_at: Date | null;
    topic_id: number;
    isOpen: boolean;
    totalVotes: number;
    duration: number;
    positiveVotes: number;
    negativeVotes: number;
  };
}

export interface ITopicSimplified {
  id: number;
  title: string;
  description: string;
  isFinished: boolean;
}
