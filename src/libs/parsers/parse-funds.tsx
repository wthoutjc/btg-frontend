// Interfaces
import { Chip, Typography } from "@mui/material";
import { Fund, TransactionType } from "../interfaces";

// Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { currencyFormatThousands } from "../../utils/currency-format";

const parseFundsData = (data: Fund[]) => {
  return data.map((item) => {
    const { last_transaction, ...rest } = item;
    const isSubscribed =
      last_transaction?.transaction_type === TransactionType.SUBSCRIBE;

    return {
      ...rest,
      minimum_amount: currencyFormatThousands(item.minimum_amount),
      status: (
        <Chip
          size="small"
          variant="outlined"
          label={
            <Typography variant="caption" fontWeight={600}>
              {isSubscribed ? "Suscrito" : "No suscrito"}
            </Typography>
          }
          icon={
            isSubscribed ? (
              <CheckCircleIcon fontSize="small" />
            ) : (
              <ErrorIcon fontSize="small" />
            )
          }
          color={isSubscribed ? "success" : "error"}
        />
      ),
    };
  });
};

export { parseFundsData };
