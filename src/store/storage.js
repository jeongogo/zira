import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let state = (set) => ({
  taskList: '',
  setTaskList: (data) => set(() => ({
    taskList: data,
  })),
});

state = persist(state, { name: 'Zira', getStorage: () => localStorage });

const useStore = create(devtools(state));

export default useStore;