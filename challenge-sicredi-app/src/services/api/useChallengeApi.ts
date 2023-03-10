import { useMemo } from 'react';
import {
  ITopicDetailed,
  ITopicSimplified,
} from '../../interfaces/topic.interface';
import { useHttp } from './base/useHttp';

export const useChallengeApi = () => {
  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    'Content-Type': 'application/json',
  });

  const registerAssociate = async (data: { name: string; cpf: string }) => {
    return await httpInstance.post('/associates', data);
  };

  const createTopic = async (data: { title: string; description: string }) => {
    return await httpInstance.post('/topics', data);
  };

  const listTopics = async (): Promise<ITopicSimplified[]> => {
    return (await httpInstance.get('/topics?sort=createdAt,desc')).content;
  };

  const getTopicById = async (id: number): Promise<ITopicDetailed> => {
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
      createTopic,
    }),
    []
  );
};
