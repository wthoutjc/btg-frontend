import { StateCreator } from "zustand";

// Interfaces
import { Alert, Dialog, DrawerState, UIState, UISlice } from "../interfaces";

// UUID
import { v4 as uuid } from "uuid";

// Constants
import { INIT_DIALOG } from "../constants/init-dialog";

const uiInitialState: UIState = {
  drawer: {
    open: true,
  },
  dialog: INIT_DIALOG,
  darkMode: false,
  alerts: [],
};

const createUISlice: StateCreator<UISlice> = (set) => ({
  ...uiInitialState,
  setDrawer: (drawer: DrawerState) => set({ drawer }),
  setDialog: (dialog: Dialog) => set({ dialog }),
  closeDialog: () => set({ dialog: INIT_DIALOG }),
  setDarkMode: (darkMode: boolean) => set({ darkMode }),
  newAlert: (alert: Alert) =>
    set((state) => ({ alerts: [...state.alerts, { ...alert, id: uuid() }] })),
  removeAlert: (id: string) =>
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    })),
});

export default createUISlice;
export type { UISlice };
