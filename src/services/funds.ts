import { Fund } from "../libs/interfaces";
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

export { getFunds };
