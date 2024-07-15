import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

// Icons
import PersonPinIcon from "@mui/icons-material/PersonPin";
import EditIcon from "@mui/icons-material/Edit";

// Interfaces
import { User as IUser } from "../../libs/interfaces/user";

// Services
import { getUser } from "../../services/user";

// Zustand
import { useUIStore } from "../../zustand/store";
import { UpdateNotification } from "./UpdateNotification";
import { currencyFormatThousands } from "../../utils/currency-format";

const User = () => {
  const { setDialog, alerts } = useUIStore();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  const handleUpdate = () => {
    if (user) {
      setDialog({
        open: true,
        title: "Actualizar medio de notificación",
        message: "Actualiza el medio de notificación de usuario final",
        children: <UpdateNotification user={user} />,
      });
    }
  };

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, [alerts]);

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
      {loading && <CircularProgress />}
      {user && (
        <Card>
          <CardHeader
            title={user.name}
            subheader="Usuario final de BTG Pactual - FVP"
          />
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2">Saldo actual: </Typography>
              <Typography variant="body2" fontWeight={600}>
                {currencyFormatThousands(user.amount)}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2">Medio de notificación: </Typography>
              <Typography variant="body2" fontWeight={600}>
                {user.notify.type} - {user.notify.value}
              </Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Tooltip title="Actualizar medio de notificación">
              <IconButton onClick={handleUpdate}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export { User };
