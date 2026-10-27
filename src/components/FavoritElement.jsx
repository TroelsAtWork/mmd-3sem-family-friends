"use client";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { addFavorite } from "@/app/actions/actions";

const Favorite = ({ id, isFavorite }) => {
  return isFavorite ? (
    <MdFavorite
      size={25}
      className="cursor-pointer absolute top-3 right-3 text-white"
      onClick={() => addFavorite(id)}
    />
  ) : (
    <MdFavoriteBorder
      size={25}
      className="cursor-pointer absolute top-3 right-3 text-white"
      onClick={() => addFavorite(id)}
    />
  );
};

export default Favorite;
