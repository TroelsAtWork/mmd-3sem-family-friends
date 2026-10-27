import { create } from "zustand";
import { persist } from "zustand/middleware";

// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!

const useStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (productId) => {
        console.log("Product id:", productId);
        const currentFavorites = get().favorites;
        const favoriteExists = currentFavorites.includes(productId);

        set({
          favorites: favoriteExists
            ? currentFavorites.filter((favoriteId) => favoriteId !== productId) // Remove if exists.
            : [...currentFavorites, productId], // Add if doesn't exist
        });
        console.log("Updated favorites:", get().favorite);
      },
    }),
    {
      name: "favorite-storage",
    },
  ),
);

export default useStore;
