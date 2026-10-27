"use server";
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
};
