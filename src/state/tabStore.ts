import {create} from "zustand";

type TabStore = {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
}

const useTabStore = create<TabStore>(set => ({
  activeTab: 1,
  setActiveTab: tab => set({activeTab: tab})
}));

export {useTabStore};
