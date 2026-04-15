import Link from "next/link";
import Image from "next/image";
import FavoritElement from "./FavoritElement";

const BreedList = ({ searchParams }) => {
  return <FetchBreeds searchParams={searchParams} />;
};

const FetchBreeds = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    const breeds = await response.json();

    return breeds.map((breed) => (
      <div key={breed.id} className="relative">
        <FavoritElement id={breed.id} breed={breed.name} />
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
  } catch (error) {
    return <p>Ingen internet forbindelse eller API utilgængeligt</p>;
  }
};

export default BreedList;
