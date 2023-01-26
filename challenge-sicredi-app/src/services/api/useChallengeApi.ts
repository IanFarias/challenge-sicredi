import { useMemo } from 'react';
import { TopicResponse } from '../../interfaces/topic.interface';
import { useHttp } from './base/useHttp';

export const useChallengeApi = () => {
  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    'Content-Type': 'application/json',
  });

  const registerAssociate = async (data: any) => {
    return await httpInstance.post('/associates', data);
  };

  const listTopics = async (): Promise<TopicResponse[]> => {
    return await httpInstance.get('/topics');
  };

  const getTopicById = async (id: number): Promise<TopicResponse> => {
    return await httpInstance.get(`/topics/${id}`);
  };

  const openVotingSession = async (
    topicId: number,
    durantion: number
  ): Promise<any> => {
    return await httpInstance.post(
      `/votingsession/${topicId}?duration=${durantion}`
    );
  };

  const voteTopic = async (
    sessionId: number,
    data: { associateId: number; vote: string }
  ) => {
    return await httpInstance.post(`/votes/${sessionId}`, data);
  };

  return useMemo(
    () => ({
      registerAssociate,
      listTopics,
      getTopicById,
      openVotingSession,
      voteTopic,
    }),
    []
  );
};
