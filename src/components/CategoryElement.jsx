"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`?category=${category}`)}>{category}</div>
  );
};

export default CategoryElement;
