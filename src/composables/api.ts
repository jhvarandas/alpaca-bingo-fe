import { ref, Ref } from 'vue';

type ApiRequest = () => Promise<void>;

export default function useApi<T>(url: RequestInfo, options?: RequestInit) {
  const response: Ref<T | undefined> = ref();

  const request: ApiRequest = async () => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      response.value = data;
    } catch (error) {
      console.error('🧨 💥 API Request : FAILED TO LOAD URL:', url);
    }
  };

  return { response, request };
}
