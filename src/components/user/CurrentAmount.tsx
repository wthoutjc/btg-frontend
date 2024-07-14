// Services
import { useEffect, useState } from "react";
import { getUser } from "../../services/user";
import { User } from "../../libs";
import { Card, CardHeader } from "@mui/material";

const CurrentAmount = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

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
