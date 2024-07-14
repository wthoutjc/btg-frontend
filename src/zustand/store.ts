import { create } from "zustand";

// Initial states
import { UISlice } from "../libs";

// Slices
import createUISlice from "../libs/slices/uiSlice";

export const useUIStore = create<UISlice>()((...a) => createUISlice(...a));
