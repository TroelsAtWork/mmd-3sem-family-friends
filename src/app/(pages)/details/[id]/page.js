import Image from "next/image";
import { Suspense } from "react";

export default function details({ params }) {
  return <FetchProduct params={params} />;
}

async function FetchProduct({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <div className="flex justify-center">
      <Image
        loading="eager"
        alt={product.brand ? product.brand : "Product Image"}
        src={product.thumbnail}
        width={300}
        height={200}
      />
    </div>
  );
}
