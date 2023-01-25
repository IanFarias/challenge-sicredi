import { useAxios } from "./useAxios";

export const useHttp = (baseURL: string, headers: {[key:string]: string}) => {
  const axiosInstace = useAxios(baseURL, headers)

   const get = async (url: string) => {
    try {
      const response = await axiosInstace.get(url)
      return response.data;
    }catch(error) {
      throw error
    }
  }

  const post = async (url: string, data: any) => {
    try {
      const response = await axiosInstace.post(url, data);
      return response.data;
    }catch(error) {
      throw error
    }
  } 

  return {get, post}
}