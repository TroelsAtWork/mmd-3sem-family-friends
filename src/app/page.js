import Image from "next/image";
import PetList from "@/components/PetList";

export default function Home() {
  return (
    <>
      <section className="flex h-13 border-2 mt-20"></section>
      <section className="grid grid-cols-2 place-items-center gap-4 justify-items-stretch mt-40 p-5 border-2">
        <PetList />
      </section>
      <nav className="h-20 border-2 fixed bottom-0 left-0 right-0"></nav>
    </>
  );
}
