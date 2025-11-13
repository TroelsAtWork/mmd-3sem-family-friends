"use client";
import useStore from "@/store/favorits";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Favorite = ({ id }) => {
  const { favorite, toggleFavorite } = useStore();
  console.log(favorite);
  if (favorite.includes(id)) {
    console.log("Favorite:", id);
    return <MdFavorite onClick={() => toggleFavorite(id)} />;
  } else {
    console.log("Not Favorite:", id);
    return <MdFavoriteBorder onClick={() => toggleFavorite(id)} />;
  }
};

export default Favorite;
