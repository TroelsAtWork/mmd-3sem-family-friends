"use server";
export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  if (!productName) {
    error.productName = "feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "feltet skal indeholde mindst 5 tegn";
  }
  if (Object.keys(error).length > 0) {
    return { error, productName };
  }
  return { succes: true };
};
