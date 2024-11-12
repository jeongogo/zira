import { create } from "zustand";
import { devtools } from "zustand/middleware";

let state = (set) => ({
  user: '',
  setUser: (data) => set(() => ({
    user: data,
  })),
});

const useStore = create(devtools(state));

export default useStore;