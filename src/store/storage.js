import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let state = (set) => ({
  theme: "default",
  setTheme: (data) => set(() => ({
    theme: data,
  })),
});

state = persist(state, { name: 'ZIBRA', getStorage: () => localStorage });

const useStorage = create(devtools(state));

export default useStorage;