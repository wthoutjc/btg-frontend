// Interfaces
import { Fund } from "../interfaces";

// Dayjs
import dayjs from "dayjs";

const parseFundsData = (data: Fund[]) => {
  return data.map((item) => ({
    ...item,
    created_at: dayjs(item.created_at).format("DD/MM/YYYY HH:mm:ss"),
  }));
};

export { parseFundsData };
