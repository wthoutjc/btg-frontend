import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import AssessmentIcon from "@mui/icons-material/Assessment";

// Interfaces
import { Transaction } from "../../libs/interfaces/transaction";

// Services
import { getTransactions } from "../../services/transactions";
import { EnhancedTable } from "../ui";
import { parseTransactionData } from "../../libs/parsers/parse-transactions";
import { transactionsDict } from "./TransactionsDict";
import { TableActions } from "../../libs";

const actions: TableActions[] = [TableActions.read];

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getTransactions("66929eabd09004fc87693968").then((transactions) =>
      setTransactions(transactions)
    );
  }, []);

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <Box
      component={"section"}
      id="btg-transactions"
      aria-label="BTG Transactions"
      aria-labelledby="btg-transactions"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AssessmentIcon fontSize="medium" />
        <Typography variant="h6" sx={{ ml: 1 }} fontWeight={600}>
          Transacciones
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      {transactions.length > 0 && (
        <EnhancedTable
          rows={parseTransactionData(transactions)}
          dict={transactionsDict}
          actions={actions}
          total={20}
        />
      )}
    </Box>
  );
};

export { Transactions };
