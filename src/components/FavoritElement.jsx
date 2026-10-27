"use client";
import useStore from "@/store/favorits";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Favorite = ({ id }) => {
  const { favorite, toggleFavorite } = useStore();
  console.log(favorite);
  if (favorite.includes(id)) {
    console.log("Favorite:", id);
    return (
      <MdFavorite
        className="mb-1 cursor-pointer"
        onClick={() => toggleFavorite(id)}
      />
    );
  } else {
    console.log("Not Favorite:", id);
    return (
      <MdFavoriteBorder
        className="mb-1 cursor-pointer"
        onClick={() => toggleFavorite(id)}
      />
    );
  }
};

export default Favorite;
