"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";
import { useFormStatus } from "react-dom";

const ResponseMessage = ({ state }) => {
  return (
    <>
      {state.success === true && (
        <p className="text-green-400">tillykke din formular er sendt...</p>
      )}
      {state.success === false && (
        <p className="text-red-500">Nået gik galt, forsøg igen...</p>
      )}
    </>
  );
};
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`border p-1 ml-1 bg-blue-400 ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={pending}
    >
      {pending ? "Submitting..." : "Add product"}
    </button>
  );
};

const ProductForm = () => {
  const [state, postProduct] = useActionState(submitProduct, {
    success: null,
    errors: {},
    fields: {},
  });
  return (
    <>
      <ResponseMessage state={state} />
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
        <SubmitButton />
      </form>
    </>
  );
};

export default ProductForm;
