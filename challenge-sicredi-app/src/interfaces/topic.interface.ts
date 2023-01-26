export interface TopicResponse {
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
    positiveVotes: number;
    negativeVotes: number;
  };
}
