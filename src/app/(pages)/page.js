import { Suspense } from "react";
import BreedList from "@/components/BreedList";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home({ searchParams }) {
  return (
    <>
      <form className="mb-5 flex items-center gap-2">
        <button
          type="submit"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <FaMagnifyingGlass />
        </button>
        <input
          type="search"
          name="query"
          placeholder="Search breed..."
          className="w-full max-w-sm rounded-full border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
        />
      </form>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
        <Suspense fallback={<div>Loading dogs...</div>}>
          <BreedList searchParams={searchParams} />
        </Suspense>
      </section>
    </>
  );
}
