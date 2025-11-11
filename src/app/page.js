import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      <section className="grid grid-cols-2 place-items-center gap-4 justify-items-stretch p-5">
        <CategoryList />
        <Suspense>
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
      </section>
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  return <ProductList category={category} />;
}
