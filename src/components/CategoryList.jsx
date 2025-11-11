import CategoryLink from "./CategoryLink";
import { Suspense } from "react";

const CategoryList = () => {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <FetchCategories />
    </Suspense>
  );
};

async function FetchCategories() {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category) => (
    <CategoryLink
      key={category}
      category={category}
      className="category-item border p-2 m-2"
    />
  ));
}

export default CategoryList;
