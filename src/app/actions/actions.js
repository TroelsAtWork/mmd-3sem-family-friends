"use server";
export const addFavorite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favouritess", {
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
    throw new Error(`Could not remove favorite: ${response.status}`);
  }
};

export const removeFavorite = async (
  favoriteId,
  setIsFavoriteClient,
  isFavorite,
) => {
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
    throw new Error(`Could not remove favorite: ${response.status}`);
  }
};
