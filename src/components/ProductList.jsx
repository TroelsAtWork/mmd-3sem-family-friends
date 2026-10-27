import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import FavoritElement from "./FavoritElement";

const ProductList = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";

  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <article
          key={product.id}
          className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <FavoritElement id={product.id} />

          <Link href={`/details/${product.id}`} className="block">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-4">
              <Image
                loading="eager"
                alt={product.title || "Product image"}
                src={product.thumbnail}
                width={300}
                height={200}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <p className="font-semibold text-gray-900">{product.title}</p>
              {product.brand && (
                <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ProductList;
