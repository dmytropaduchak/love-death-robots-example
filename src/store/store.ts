import { PaletteMode } from '@mui/material';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

interface Store {
  theme: THEMES | PaletteMode;
}

interface State {
  store: Store;
  set: <K extends keyof Store>(key: K, data: Partial<Store[K]>) => void;
  get: <K extends keyof Store>(key: K) => Store[K];
}

const name = '0.0.1';

const storage = createJSONStorage<State>(() => localStorage);
const merge = (...args: [unknown, State]) => {
  const state = args[0] as State;
  const store = state.store;
  return { ...args[1], store };
}

const state = persist<State, [], [], State>((set, get) => ({
  store: {
    theme: THEMES.DARK,
  },
  get: (key) => {
    const state = get();
    return state.store[key];
  },
  set: (key, data) => set((state) => {
    const store = { ...state.store, [key]: data };
    return { store };
  }),
}), { name, merge, storage });

export const useStore = create<State>()(state);
