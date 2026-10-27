"use client"; //vigtigt!!!
import useStore from "@/store/favorits";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Favorite = ({ id }) => {
  const { favorites, toggleFavorite } = useStore();

  if (favorites.includes(id)) {
    return (
      <MdFavorite
        className="mb-1 cursor-pointer"
        onClick={() => toggleFavorite(id)}
      />
    );
  } else {
    return (
      <MdFavoriteBorder
        className="mb-1 cursor-pointer"
        onClick={() => toggleFavorite(id)}
      />
    );
  }
};

export default Favorite;
