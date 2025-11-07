import Link from "next/link";
import Image from "next/image";

const PetList = () => {
  return (
    <>
      <Link href="/detalje">
        <div className="shadow-md p-4 rounded-2xl">
          <Image
            loading="eager"
            alt="Cat"
            src="https://placecats.com/neo/300/200"
            width={300}
            height={200}
            className="-mx-4 -mt-4 mb-4 w-[calc(100%+2rem)] max-w-none rounded-2xl"
          />
          <div className="font-black font-stretch-extra-condensed tracking-wide flex justify-between">
            <p>Kælenavn</p>
            <p>2,5år</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PetList;
