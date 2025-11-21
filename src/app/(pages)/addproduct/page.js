"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, {
    success: null,
    errors: {},
    fields: {},
  });
  console.log(state);
  return (
    <div className="flex justify-center items-center h-lvh">
      {state.success === true && (
        <p className="text-green-400">tillykke din formular er sendt...</p>
      )}
      {state.success === false && (
        <p className="text-red-500">Nået gik galt, forsøg igen...</p>
      )}
      <form action={postProduct}>
        {state.errors?.productName && (
          <p className="text-red-500">{state.errors.productName}</p>
        )}
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          defaultValue={state.fields?.productName}
          className="border p-1"
        />
        <button type="submit" className="border p-1 ml-1">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default addProduct;
