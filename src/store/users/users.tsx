import { create } from "zustand";
import { Action, State } from "./users.type";

// Create your store, which includes both state and (optionally) actions
export const usePersonStore = create<State & Action>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));
