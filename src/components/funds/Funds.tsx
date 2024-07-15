import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import ArticleIcon from "@mui/icons-material/Article";

// Interfaces
import { Fund } from "../../libs";

// UI
import { EnhancedTable, TableSkeleton } from "../ui";

// Dictionaries
import { fundsDict } from "./FundsDict";

// Services, Parsers and Actions
import { getFunds } from "../../services";
import { parseFundsData } from "../../libs/parsers/parse-funds";

const Funds = () => {
  const [loading, setLoading] = useState(true);
  const [funds, setFunds] = useState<Fund[]>([]);

  useEffect(() => {
    getFunds().then((funds) => {
      setFunds(funds);
      setLoading(false);
    });
  }, []);

  return (
    <Box
      component={"section"}
      id="btg-funds"
      aria-label="BTG Funds"
      aria-labelledby="btg-funds"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArticleIcon fontSize="medium" />
        <Typography variant="h6" sx={{ ml: 1 }} fontWeight={600}>
          Fondos
        </Typography>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      {loading && <TableSkeleton />}

      {funds.length > 0 && (
        <EnhancedTable
          rows={parseFundsData(funds)}
          dict={fundsDict}
          actions={[]}
          total={20}
          readonly
        />
      )}
    </Box>
  );
};

export { Funds };
