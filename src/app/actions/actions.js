"use server";
import { refresh } from "next/cache";

export const addFavorite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });
  if (!response.ok) {
    throw new Error(`Could not add favorite: ${response.status}`);
  }
  refresh();
};

export const removeFavorite = async (favoriteId) => {
  const response = await fetch(
    `https://api.thedogapi.com/v1/favourites/${favoriteId}`,
    {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );
  if (!response.ok) {
    throw new Error(`Could not delete favorite: ${response.status}`);
  }
  refresh();
};
