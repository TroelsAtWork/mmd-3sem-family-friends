"use client";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import useFavorites from "@/store/favorite";

const Favorite = ({ id, breed }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();
  if (favorites.some((favorite) => favorite.id === id)) {
    return (
      <MdFavorite
        size={25}
        className="cursor-pointer absolute top-3 right-3 text-red-500"
        onClick={() => {
          removeFavorite(id);
        }}
      />
    );
  } else {
    return (
      <MdFavoriteBorder
        size={25}
        className="cursor-pointer absolute top-3 right-3 text-white"
        onClick={() => {
          setFavorite(id, breed);
        }}
      />
    );
  }
};

export default Favorite;
