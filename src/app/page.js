import Image from "next/image";
import PetList from "@/components/PetList";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/detalje">
      <section className="flex h-13 mt-20"></section>
      <section className="grid grid-cols-2 place-items-center gap-4 justify-items-stretch mt-40 p-5">
        <PetList />
      </section>
      <nav className="h-20fixed bottom-0 left-0 right-0"></nav>
    </Link>
  );
}
