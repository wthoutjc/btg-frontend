import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import ArticleIcon from "@mui/icons-material/Article";

// Interfaces
import { Fund } from "../../libs";

// UI
import { EnhancedTable } from "../ui";

// Dictionaries
import { fundsDict } from "./FundsDict";

// Services, Parsers and Actions
import { getFunds } from "../../services";
import { parseFundsData } from "../../libs/parsers/parse-funds";

const Funds = () => {
  const [funds, setFunds] = useState<Fund[]>([]);

  useEffect(() => {
    getFunds().then((funds) => setFunds(funds));
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
      <Divider sx={{ mb: 2 }} />
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
