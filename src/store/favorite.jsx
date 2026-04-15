import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create(
  persist((set, get) => ({
    favorites: [],
    setFavorite: (id, breed) =>
      set((state) => ({
        favorites: [...state.favorites, { id: id, breed: breed }],
      })),
    removeFavorite: (id) =>
      set(() => ({
        favorites: get().favorites.filter((favorite) => favorite.id !== id),
      })),
  })),
);
export default useFavorites;
