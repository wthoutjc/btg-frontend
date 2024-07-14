import { Transaction } from "../libs/interfaces/transaction";
import { api } from "../utils";

const getTransactions = async (userId: string) => {
  try {
    const response = await api.get<Transaction[]>(`/transactions/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getTransactions };
