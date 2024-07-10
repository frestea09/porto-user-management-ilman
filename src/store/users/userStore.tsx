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
            console.log("hello", updatedUser);
            return user.id == updatedUser.id ? updatedUser : user;
          })
        : null,
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users ? state.users.filter((user) => user.id !== id) : null,
    })),
  fetchUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const usersWithPictures = data.map((user: any) => ({
      ...user,
      picture: `https://picsum.photos/200/300?random=${Math.random()}`,
    }));
    set({ users: usersWithPictures });
  },
}));
