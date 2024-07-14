import { useEffect, useState } from "react";
import { Card, CardHeader } from "@mui/material";

// Interfaces
import { User } from "../../libs";

// Services
import { getUser } from "../../services/user";

// Zustand
import { useUIStore } from "../../zustand/store";

const CurrentAmount = () => {
  const { alerts } = useUIStore();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, [alerts]);

  return (
    <>
      {user && (
        <Card sx={{ mb: 2, cursor: "default" }}>
          <CardHeader title={`$ ${user.amount}`} subheader="Saldo actual" />
        </Card>
      )}
    </>
  );
};

export { CurrentAmount };
