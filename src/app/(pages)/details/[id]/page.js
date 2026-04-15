import Image from "next/image";
import { Suspense } from "react";
import FavoritElement from "@/components/FavoritElement";

export default function details({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchBreedDetails params={params} />
    </Suspense>
  );
}

async function FetchBreedDetails({ params }) {
  const { id } = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breed = await response.json();
  return (
    <div className="flex justify-center relative w-fit">
      <FavoritElement id={breed.id} />
      <Image
        loading="eager"
        alt={breed.name ? breed.name : "Breed"}
        src={breed.image.url}
        width={300}
        height={200}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
