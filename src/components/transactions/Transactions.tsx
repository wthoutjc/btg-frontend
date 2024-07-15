import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import AssessmentIcon from "@mui/icons-material/Assessment";

// Interfaces
import { Transaction } from "../../libs/interfaces/transaction";

// UI
import { EnhancedTable, TableSkeleton } from "../ui";

// Dictionaries
import { transactionsDict } from "./TransactionsDict";

// Services, Parsers and Actions
import { getTransactions, getUser } from "../../services";
import { parseTransactionData } from "../../libs/parsers/parse-transactions";
import { TableActions } from "../../libs";

const actions: TableActions[] = [TableActions.read];

const Transactions = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getUser().then((user) => {
      if (!user) return;

      getTransactions(user._id).then((transactions) => {
        setTransactions(transactions);
        setLoading(false);
      });
    });
  }, []);

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
      <Divider sx={{ mb: 2, mt: 1 }} />
      {loading && <TableSkeleton />}

      {transactions.length > 0 && (
        <EnhancedTable
          rows={parseTransactionData(transactions)}
          dict={transactionsDict}
          actions={actions}
          total={20}
          readonly
        />
      )}
    </Box>
  );
};

export { Transactions };
