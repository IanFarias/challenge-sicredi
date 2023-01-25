import { useMemo } from "react";
import { useHttp } from "./base/useHttp";

export const useChallengeApi = () => {
  const httpInstance = useHttp(import.meta.env.VITE_API_URL, {
    "Content-Type": "application/json",
  });

  const registerAssociate = async (data: any) => {
    return await httpInstance.post('/associates', data)
  }

  

  return useMemo(() => ({
    registerAssociate,
  }), [])
}