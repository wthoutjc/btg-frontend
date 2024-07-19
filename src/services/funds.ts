import { Fund, Transaction } from "../libs/interfaces";
import { api } from "../utils";

const getFunds = async () => {
  try {
    const response = await api.get<Fund[]>(`/funds/all`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const subscribe = async (data: { fund_id: string; amount: number }) => {
  try {
    const response = await api.post<Transaction>(`/funds/subscribe`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const unsubscribe = async ({ fund_id }: { fund_id: string }) => {
  try {
    const response = await api.put<Transaction>(
      `/funds/unsubscribe/${fund_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getFunds, subscribe, unsubscribe };
