import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <Suspense>
      <FetchProduct />
    </Suspense>
  );
};

const FetchProduct = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products");
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
