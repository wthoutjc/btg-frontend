import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

// Interfaces
import { Transaction, TransactionType } from "../interfaces";

// Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

// Dayjs
import dayjs from "dayjs";

const parseTransactionData = (data: Transaction[]) => {
  return data.map((item) => {
    const { fund, ...rest } = item;

    return {
      ...rest,
      fund: fund.name,
      created_at: dayjs(item.created_at).format("DD/MM/YYYY HH:mm:ss"),
      transaction_type: (
        <Chip
          size="small"
          variant="outlined"
          label={
            <Typography variant="caption" fontWeight={600}>
              {item.transaction_type === TransactionType.SUBSCRIBE
                ? "Suscripción"
                : "Cancelación"}
            </Typography>
          }
          icon={
            item.transaction_type === TransactionType.SUBSCRIBE ? (
              <CheckCircleIcon fontSize="small" />
            ) : (
              <ErrorIcon fontSize="small" />
            )
          }
          color={
            item.transaction_type === TransactionType.UNSUBSCRIBE
              ? "error"
              : "success"
          }
        />
      ),
    };
  });
};

export { parseTransactionData };
