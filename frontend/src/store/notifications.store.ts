import { create } from "zustand";

type NotificationsStore = {
  notifications: any[];

  setNotifications: (
    notifications: any[]
  ) => void;
};

export const useNotificationsStore =
  create<NotificationsStore>((set) => ({
    notifications: [],

    setNotifications: (notifications) =>
      set({
        notifications,
      }),
  }));