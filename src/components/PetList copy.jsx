import { cacheLife } from "next/cache";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const PetList = () => {
  return (
    <Link href="/detailpage/1">
      <div>
        <Image
          loading="eager"
          alt="Cat"
          src="https://placecats.com/neo/300/200"
          width={300}
          height={200}
          className="hue-rotate-90"
        />
        <div className="border-2">Kælenavn</div>
      </div>
    </Link>
    // <Suspense>
    //   <FetchPets />
    // </Suspense>
  );
};

const FetchPets = async () => {
  "use cache";
  //   cacheLife("minutes");
  const response = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4VzJTb3l5aG9KQWJnczNPMGpyQjhWME94UW83NEFab3ZOQmpQSVpHNE1FMm9qbmMyMSIsImp0aSI6IjhjMDZmYjIyMzRlODc1NTZhNDk4ZDE1ZTRiODIwMWIwMmVmMTkwN2FiMmY4MjI5YWIyMzNlZTZlMTE3ZTgyY2RiMDk4YWFhYTgyZTE2MWQxIiwiaWF0IjoxNzYyNDA2ODUzLCJuYmYiOjE3NjI0MDY4NTMsImV4cCI6MTc2MjQxMDQ1Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.RRWC5Sp3v2yeuBL3g7Jm3FtO-vKxHigIVPLatdtanct8EffG7I9ZTGYVVmpMn7Wxtyzen1Z39o-XsBm0j52xZHzqgZtHD90bvf7vhXlqKxb3obUaxhN98_yAbgHnMZMWkkEVlwjSTunTWYObg3Ay3l8k7DzegFtJVus7sJZvUPbVm6zq5C6Gy34Zr9odjlpuumigEMc0F-ZA-B0gKncxscMFuVxMU_kWk6uTZjXcGQFLZ1GCi4ygx5ntWMqlDFI9MuRoeNUzUe0uxs8EtWHdeW5YlUkCaizYPRiZdFdOXmc0RnIdI-_LMCJBNG_t-uDc5rW49V6hTuG9z5NFi2nPmQ`,
    },
  });
  const { animals } = await response.json();
  //   return console.log(animals);
  return animals.map((animal) => (
    <div key={animal.id}>
      <Image
        loading="eager"
        alt={animal.name}
        src="https://placecats.com/neo/300/200"
        width={300}
        height={200}
        className="hue-rotate-90"
      />
      <div className="border-2">{animal.name}</div>
    </div>
  ));
};

export default PetList;
