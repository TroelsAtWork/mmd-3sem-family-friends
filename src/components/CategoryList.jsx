import { Suspense } from "react";
import CategoryElement from "./CategoryElement";
const CategoryList = () => {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <FetchCategories />
    </Suspense>
  );
};

const FetchCategories = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category) => (
    <CategoryElement key={category} category={category} />
  ));
};

export default CategoryList;
