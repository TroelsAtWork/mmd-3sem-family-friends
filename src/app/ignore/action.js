"use server";
export const submitProduct = async (prevState, formData) => {
  const productName = formData.get("productname");

  const state = {
    success: null,
    errors: {},
    fields: {
      productName,
    },
  };

  if (!productName) {
    state.errors.productName = "feltet skal udfyldes";
  } else if (productName.length < 5) {
    state.errors.productName = "feltet skal indeholde mindst 5 tegn";
  }

  if (Object.keys(state.errors).length > 0) {
    return state;
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: productName,
    }),
  });
  console.log(response);

  state.success = response.ok;
  return state;
};
