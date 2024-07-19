import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ModeTransaction } from "../../libs/enums";

// Icons
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ArticleIcon from "@mui/icons-material/Article";
import PaidIcon from "@mui/icons-material/Paid";

// React Hook Form
import { useForm } from "react-hook-form";

// Constants
import { REQUIRED_MESSAGE } from "../../libs/constants/required";

// Services
import { getFunds, subscribe, unsubscribe } from "../../services";

// Interfaces
import { Fund, Transaction } from "../../libs";

// Zustand
import { useUIStore } from "../../zustand/store";

interface Props {
  mode: ModeTransaction;
}

const HandleTransaction = ({ mode }: Props) => {
  const [loading, setLoading] = useState(true);
  const [funds, setFunds] = useState<Fund[]>([]);
  const { newAlert } = useUIStore();

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<{
    fund_id: string;
    amount: number;
  }>({
    defaultValues: {
      fund_id: "Seleccionar",
    },
  });

  const handleTransaction = (transaction: Transaction | null) => {
    if (transaction) {
      newAlert({
        id: "",
        severity: "success",
        message:
          mode === ModeTransaction.SUBSCRIBE
            ? "Suscripción exitosa"
            : "Cancelación exitosa",
      });
    }

    reset();
    setLoading(false);
  };

  const onSubmit = (data: { fund_id: string; amount: number }) => {
    setLoading(true);
    mode === ModeTransaction.SUBSCRIBE
      ? subscribe(data).then((res) => handleTransaction(res))
      : unsubscribe(data).then((res) => handleTransaction(res));
  };

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
        {mode === ModeTransaction.SUBSCRIBE ? (
          <SubscriptionsIcon fontSize="medium" />
        ) : (
          <UnsubscribeIcon fontSize="medium" />
        )}

        <Typography variant="h6" sx={{ ml: 1 }} fontWeight={600}>
          {mode === ModeTransaction.SUBSCRIBE
            ? "Suscribirse"
            : "Cancelar suscripción"}
        </Typography>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      <Box component={"form"}>
        <TextField
          fullWidth
          required
          select
          autoComplete="off"
          label={"Fondo"}
          placeholder="Seleccionar"
          disabled={loading}
          helperText={!!errors.fund_id && errors.fund_id.message}
          sx={{ mb: 2 }}
          error={!!errors.fund_id}
          {...register("fund_id", {
            required: REQUIRED_MESSAGE,
            validate: (value) =>
              value === "Seleccionar" ? REQUIRED_MESSAGE : undefined,
          })}
          value={watch("fund_id")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ArticleIcon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem disabled value="Seleccionar">
            Seleccionar
          </MenuItem>
          {funds.map(({ id, name }) => (
            <MenuItem value={id}>{name}</MenuItem>
          ))}
        </TextField>

        {mode === ModeTransaction.SUBSCRIBE && (
          <TextField
            fullWidth
            required
            type="number"
            autoComplete="off"
            label={"Monto"}
            placeholder="Ej: 250000"
            disabled={loading}
            helperText={!!errors.amount && errors.amount.message}
            error={!!errors.amount}
            {...register("amount", {
              required: REQUIRED_MESSAGE,
              validate: (value) =>
                value <= 0 ? "El monto debe ser mayor a 0" : undefined,
            })}
            value={watch("amount")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PaidIcon />
                </InputAdornment>
              ),
            }}
          />
        )}

        <Button
          sx={{ mt: 2 }}
          variant="contained"
          fullWidth
          color={mode === ModeTransaction.SUBSCRIBE ? "primary" : "secondary"}
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
        >
          {mode === ModeTransaction.SUBSCRIBE
            ? "Suscribirse"
            : "Cancelar suscripción"}
        </Button>
      </Box>
    </Box>
  );
};

export { HandleTransaction };
