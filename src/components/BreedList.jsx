import Link from "next/link";
import Image from "next/image";
import FavoritElement from "./FavoritElement";

const BreedList = ({ searchParams }) => {
  return <FetchBreeds searchParams={searchParams} />;
};

const FetchBreeds = async ({ searchParams }) => {
  const { query, id } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";
  const headers = {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
    cache: "no-store",
  };

  const [breedsResponse, favoritesResponse] = await Promise.all([
    await fetch(url, { ...headers }),
    await fetch("https://api.thedogapi.com/v1/favourites", { ...headers }),
  ]);

  const [breeds, favorites] = await Promise.all([
    await breedsResponse.json(),
    await favoritesResponse.json(),
  ]);

  return breeds.map((breed) => {
    const imageId = breed.image.id;
    const isFavorite = favorites.some(
      //boolian bruges til at vise det korrekte favorite ikon
      (favorite) => favorite.image_id === imageId,
    );
    const favorite = favorites.find(
      //id bruges af removeFavorite
      (favorite) => favorite.image_id === imageId,
    );

    return (
      <div key={breed.id} className="relative">
        <FavoritElement
          id={breed.image.id}
          breed={breed.name}
          isFavorite={isFavorite}
          favoriteId={favorite?.id}
        />
        <Link href={`/details/${breed.id}`}>
          <Image
            loading="eager"
            alt={breed.name ? breed.name : "Image of dog"}
            src={breed.image.url}
            width={300}
            height={200}
            className="w-full h-52 object-cover rounded-2xl"
          />
          <div className="text-center">{breed.name}</div>
        </Link>
      </div>
    );
  });
};

export default BreedList;
