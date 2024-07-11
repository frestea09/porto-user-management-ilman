import { fetcher } from "@/utils/api/jsonplaceholder/fetcher";
import axios from "axios";
import create from "zustand";

interface UserStore {
  users: any[] | null;
  addUser: (user: any) => void;
  editUser: (user: any) => void;
  deleteUser: (id: number) => void;
  fetchUsers: any;
}

export const useUserStore = create<UserStore>((set) => ({
  users: null,

  addUser: (user) =>
    set((state) => ({
      users: state.users ? [...state.users, user] : [user],
    })),
  editUser: (updatedUser) =>
    set((state) => ({
      users: state.users
        ? state.users.map((user) => {
            return user.id == updatedUser.id ? updatedUser : user;
          })
        : null,
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users ? state.users.filter((user) => user.id !== id) : null,
    })),
  fetchUsers: async () => {
    const response = await fetcher("/users");
    const data = response;
    const usersWithPictures = data.map((user: any) => ({
      ...user,
      picture: `https://picsum.photos/200/300?random=${Math.random()}`,
    }));
    set({ users: usersWithPictures });
  },
}));
