import { User } from "../libs";
import { api } from "../utils";

const getUser = async () => {
  try {
    const response = await api.get<User>("/user/me");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getUser };
