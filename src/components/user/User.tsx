import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import PersonPinIcon from "@mui/icons-material/PersonPin";

// Interfaces
import { User as IUser } from "../../libs/interfaces/user";

// Services
import { getUser } from "../../services/user";

const User = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
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
        <PersonPinIcon fontSize="medium" />
        <Typography variant="h6" sx={{ ml: 1 }} fontWeight={600}>
          Usuario final
        </Typography>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      {user && <Box>{user.name}</Box>}
    </Box>
  );
};

export { User };
