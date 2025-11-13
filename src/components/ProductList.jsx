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
  return products.map((product) => (
    <div key={product.id}>
      <FavoritElement id={product.id} />
      <Link href={`/details/${product.id}`}>
        <Image
          loading="eager"
          alt={product.brand ? product.brand : "Product Image"}
          src={product.thumbnail}
          width={300}
          height={200}
        />
        <div className="text-center">{product.brand}</div>
      </Link>
    </div>
  ));
};

export default ProductList;
