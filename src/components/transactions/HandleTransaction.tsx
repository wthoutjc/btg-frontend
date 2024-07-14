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

// React Hook Form
import { useForm } from "react-hook-form";

// Constants
import { REQUIRED_MESSAGE } from "../../libs/constants/required";

// Services
import { getFunds, subscribe, unsubscribe } from "../../services";

// Interfaces
import { Fund } from "../../libs";

// Zustand
import { useUIStore } from "../../zustand/store";

interface Props {
  mode: ModeTransaction;
}

const HandleTransaction = ({ mode }: Props) => {
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
  }>();

  useEffect(() => {
    getFunds().then((funds) => setFunds(funds));
  }, []);

  const onSubmit = (data: { fund_id: string }) => {
    mode === ModeTransaction.SUBSCRIBE
      ? subscribe(data).then(() => {
          newAlert({
            id: "",
            severity: "success",
            message: "Cliente borrado satisfactoriamente",
          });
          reset();
        })
      : unsubscribe(data).then(() => reset());
  };

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
          disabled={false}
          helperText={!!errors.fund_id && errors.fund_id.message}
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
          {funds.map(({ _id, name }) => (
            <MenuItem value={_id}>{name}</MenuItem>
          ))}
        </TextField>

        <Button
          sx={{ mt: 2 }}
          variant="contained"
          fullWidth
          color={mode === ModeTransaction.SUBSCRIBE ? "primary" : "secondary"}
          onClick={handleSubmit(onSubmit)}
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
