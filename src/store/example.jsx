import { create } from "zustand";
import { persist } from "zustand/middleware";

// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!

const useStore = create(
  persist(
    (set, get) => ({
      favorite: [],
      toggleFavorite: (breed) => {
        const current = get().favorite;
        const exists = current.includes(breed);
        set({
          favorite: exists
            ? current.filter((fav) => fav !== breed) // Remove if exists
            : [...current, breed], // Add if doesn't exist
        });
      },
    }),
    {
      name: "favorite-storage",
    },
  ),
);

export default useStore;

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useFavorites = create(
//   persist((set, get) => ({
//     favorites: [],
//     setFavorite: (id, breed) =>
//       set((state) => ({
//         favorites: [...state.favorites, { id: id, breed: breed }],
//       })),
//     removeFavorite: (id) =>
//       set(() => ({
//         favorites: get().favorites.filter((favorite) => favorite.id !== id),
//       })),
//   })),
// );

// export default useFavorites;
