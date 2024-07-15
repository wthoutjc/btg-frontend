import { useEffect, useState } from "react";
import { Card, CardHeader, Skeleton } from "@mui/material";

// Interfaces
import { User } from "../../libs";

// Services
import { getUser } from "../../services/user";

// Zustand
import { useUIStore } from "../../zustand/store";
import { currencyFormatThousands } from "../../utils/currency-format";

const CurrentSkeleton = () => {
  return <Skeleton variant="rounded" width={210} height={80} sx={{ mb: 2 }} />;
};

const CurrentAmount = () => {
  const { alerts } = useUIStore();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, [alerts]);

  if (loading) {
    return <CurrentSkeleton />;
  }

  return (
    <>
      {user && (
        <Card sx={{ mb: 2, cursor: "default" }}>
          <CardHeader
            title={`$ ${currencyFormatThousands(user.amount)}`}
            subheader="Saldo actual"
          />
        </Card>
      )}
    </>
  );
};

export { CurrentAmount };
