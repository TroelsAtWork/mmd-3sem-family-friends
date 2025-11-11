import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";

  const endpoint = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";
  const response = await fetch(endpoint);
  const { products } = await response.json();
  return products.map((product) => (
    <Link href={`/details/${product.id}`} key={product.id}>
      <div>
        <Image
          loading="eager"
          alt={product.brand ? product.brand : "Product Image"}
          src={product.thumbnail}
          width={300}
          height={200}
        />
        <div className="text-center">{product.brand}</div>
      </div>
    </Link>
  ));
};

export default ProductList;
