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

  return useMemo(
    () => ({
      registerAssociate,
      listTopics,
    }),
    []
  );
};
