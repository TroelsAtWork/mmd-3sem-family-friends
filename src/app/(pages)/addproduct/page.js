"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log("state", state);
  return (
    <div className="flex justify-center items-center h-lvh">
      <form action={postProduct}>
        {state.error.productname && (
          <p className="text-rose-400">{state.error.productname}</p>
        )}
        <input type="text" name="productname" className="border-1 p-1 mr-2" />
        <button className="bg-blue-300 cursor-pointer p-1 border-blue-500 border-1 text-white">
          Add product
        </button>
      </form>
    </div>
  );
};

export default addProduct;
