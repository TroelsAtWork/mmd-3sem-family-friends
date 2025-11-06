import Link from "next/link";
import Image from "next/image";

const PetList = () => {
  return (
    <>
      <Link href="/details/1">
        <div className="shadow-md p-2 rounded-2xl">
          <Image
            loading="eager"
            alt="Cat"
            // src="https://placecats.com/neo/300/200"
            width={300}
            height={200}
            className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-t-2xl"
          />
          <div className="font-semibold font-stretch-extra-condensed tracking-wide">
            Kælenavn
          </div>
        </div>
      </Link>
    </>
  );
};

export default PetList;
