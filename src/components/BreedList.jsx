import Link from "next/link";
import Image from "next/image";
import FavoritElement from "./FavoritElement";

const BreedList = ({ searchParams }) => {
  return <FetchBreeds searchParams={searchParams} />;
};

const FetchBreeds = async ({ searchParams }) => {
  "use server";
  const { query, id } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";
  const [breedResponse, favoritesResponse] = await Promise.all([
    fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }),
    fetch("https://api.thedogapi.com/v1/favourites", {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }),
  ]);
  const [breeds, favorites] = await Promise.all([
    breedResponse.json(),
    favoritesResponse.json(),
  ]);

  return breeds.map((breed) => (
    <div key={breed.id} className="relative">
      <FavoritElement id={breed.image.id} breed={breed.name} />
      <Link href={`/details/${breed.id}`}>
        <Image
          loading="eager"
          alt={breed.name ? breed.name : "Image of dog"}
          src={breed.image.url}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover rounded-2xl"
        />
        <div className="text-center">{breed.name}</div>
      </Link>
    </div>
  ));
};

export default BreedList;
