"use client";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { addFavorite } from "@/app/actions/actions";
import { removeFavorite } from "@/app/actions/actions";
import { useState } from "react";

const Favorite = ({ id, isFavorite, favoriteId }) => {
  // isFavorite = server
  // isFacoriteClient = opdatere favorite ikonet i clienten (browseren),
  // så brugeren ser favoritikonet ændre sig, før listen genereres fra serveren på fremtidige requests.
  const [isFavoriteClient, setIsFavoriteClient] = useState(isFavorite);

  return isFavoriteClient ? (
    <MdFavorite
      size={25}
      className="cursor-pointer absolute top-3 right-3 text-white"
      onClick={() => {
        setIsFavoriteClient(!isFavorite);
        removeFavorite(favoriteId);
      }}
    />
  ) : (
    <MdFavoriteBorder
      size={25}
      className="cursor-pointer absolute top-3 right-3 text-white"
      onClick={() => {
        setIsFavoriteClient(!isFavorite);
        addFavorite(id);
      }}
    />
  );
};

export default Favorite;
