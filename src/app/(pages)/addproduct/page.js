"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state);
  return (
    <div className="flex justify-center items-center h-lvh">
      {state.succes && (
        <p className="text-green-400">tillykke din formular er sendt...</p>
      )}
      <form action={postProduct}>
        {state.error?.productName && (
          <p className="text-red-500">{state.error.productName}</p>
        )}
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          defaultValue={state.productName}
          className="border-1 p-1"
        />
        <button type="submit" className="border-1 p-1 ml-1">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default addProduct;
