"use client";
import { useRouter } from "next/navigation";

const CategoryLink = ({ category }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/?category=${category}`)}
      className="category-item inline cursor-pointer"
    >
      {category}
    </div>
  );
};

export default CategoryLink;
