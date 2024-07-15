import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";
import { INIT_DIALOG, REQUIRED_MESSAGE, User } from "../../libs";

// Icons
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

// Services
import { updateUser } from "../../services/user";

// Zustand
import { useUIStore } from "../../zustand/store";

interface Props {
  user: User;
}

interface UpdateNotification {
  notify: "email" | "sms" | "Seleccionar";
  value: string;
}

const UpdateNotification = ({ user }: Props) => {
  const { newAlert, setDialog } = useUIStore();

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UpdateNotification>({
    defaultValues: {
      notify: "Seleccionar",
      value: "",
    },
  });

  const type = watch("notify");

  const onSubmit = (data: UpdateNotification) => {
    const newUser: User = {
      ...user,
      notify: {
        type: data.notify,
        value: data.value,
      },
    };

    updateUser(newUser).then((user) => {
      if (user) {
        newAlert({
          id: "update-notification",
          message: "Medio de notificación actualizado satisfactoriamente",
          severity: "success",
        });
        setDialog(INIT_DIALOG);
        reset();
      }
    });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        required
        select
        autoComplete="off"
        label={"Medio de notificación"}
        placeholder="Seleccionar"
        disabled={false}
        helperText={!!errors.notify && errors.notify.message}
        error={!!errors.notify}
        {...register("notify", {
          required: REQUIRED_MESSAGE,
          validate: (value) =>
            value === "Seleccionar" ? REQUIRED_MESSAGE : undefined,
        })}
        value={watch("notify")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CircleNotificationsIcon />
            </InputAdornment>
          ),
        }}
      >
        <MenuItem disabled value="Seleccionar">
          Seleccionar
        </MenuItem>
        <MenuItem value="sms">SMS</MenuItem>
        <MenuItem value="email">Email</MenuItem>
      </TextField>

      <TextField
        sx={{ mb: 2 }}
        fullWidth
        required
        type="text"
        autoComplete="off"
        label={"Valor"}
        placeholder={
          type === "email" ? "Correo electrónico" : "Número de teléfono"
        }
        disabled={false}
        helperText={!!errors.value && errors.value.message}
        error={!!errors.value}
        {...register("value", {
          required: REQUIRED_MESSAGE,
          validate: (value) =>
            value === "Seleccionar" ? REQUIRED_MESSAGE : undefined,
        })}
        value={watch("value")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MarkChatUnreadIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button variant="contained" type="submit" fullWidth>
        Actualizar
      </Button>
    </Box>
  );
};

export { UpdateNotification };
