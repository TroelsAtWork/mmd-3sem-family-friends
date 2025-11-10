import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 place-items-center gap-4 justify-items-stretch p-5">
        <ProductList />
      </section>
    </>
  );
}
